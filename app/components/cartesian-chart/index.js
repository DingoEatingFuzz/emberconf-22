import Component from '@glimmer/component';
import { get } from '@ember/object';
import { tracked, cached } from '@glimmer/tracking';
import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import * as d3 from 'd3';

const aggregators = {
  mean: d3.mean,
  sum: d3.sum,
};

export default class CartesianChart extends Component {
  @tracked height = 1;
  @tracked width = 1;
  @tracked element = null;

  // Derived once the axes are rendered
  @tracked xAxisHeight = 0;
  @tracked yAxisWidth = 0;

  @cached get xAxisOffset() {
    return this.height - this.xAxisHeight;
  }

  // Data is now derived from xLimit, yProp, and yAgg
  @cached get data() {
    const { xLimit, yProp, yAgg } = this.args;
    const aggregator = yAgg && aggregators[yAgg];

    let yField = yProp;
    let yAttr = yProp;
    if (yAgg) {
      [yField, yAttr] = yProp.split('.');
    }

    let data = this.args.data;
    if (xLimit) {
      data = yAgg
        ? data.sortBy(`${yField}.length`).reverse().slice(0, xLimit)
        : data.sortBy(yField).reverse().slice(0, xLimit);
    }

    data.forEach((d) => {
      d.$field = yAgg ? aggregator(d[yField].mapBy(yAttr)) : d[yField];
    });

    return data.sortBy('$field').reverse();
  }

  @cached get yRange() {
    return [this.height - this.xAxisHeight, 0];
  }
  @cached get yDomain() {
    return this.args.yDomain;
  }
  @cached get yScale() {
    return d3.scaleLinear(this.yDomain, this.yRange);
  }
  @cached get yAxis() {
    console.log('yScale', this.yScale.domain(), this.yScale.range());
    return d3.axisLeft(this.yScale);
  }
  @cached get yGridlines() {
    return d3
      .axisLeft(this.yScale)
      .tickSize(-this.width + this.yAxisWidth)
      .tickFormat('');
  }

  @cached get xRange() {
    return [this.yAxisWidth, this.width];
  }
  @cached get xDomain() {
    return this.data.mapBy(this.args.xProp);
  }
  @cached get xScale() {
    return d3.scaleBand().domain(this.xDomain).range(this.xRange);
  }
  @cached get xAxis() {
    console.log('xScale', this.xScale.domain(), this.xScale.range());
    return d3.axisBottom(this.xScale).tickSizeOuter(0);
  }

  // Apply geometric computations on the dataset for use in the template
  @cached get computedData() {
    const formatter = d3.format('.1f');
    return this.data.map((d) => ({
      ...d,
      x: this.xScale(get(d, this.args.xProp)) + 5,
      y: this.yScale(d.$field),
      formattedAvgScore: formatter(d.$field),
      height: this.yScale(0) - this.yScale(d.$field),
      width: this.xScale.bandwidth() - 10,
    }));
  }

  @action
  onInsert(el) {
    // Derive width and height from parent element
    this.width = el.clientWidth;
    this.height = el.clientHeight;
    this.element = el;

    this.mountElements(el);

    // Calculate dimensions of axes in order to recompute the inner canvas dimensions.
    // This way we don't have hardcoded margins
    scheduleOnce('afterRender', this, this.getDimensions);
  }

  getDimensions() {
    const el = this.element;
    this.yAxisWidth = el.querySelector('.y-axis').getBBox().width;
    this.xAxisHeight = el.querySelector('.x-axis').getBBox().height;

    // Re-render axes now that dimensions are recomputed
    this.mountElements(el);
  }

  mountElements(el) {
    const $el = d3.select(el);

    // Mount all the d3 generated elements
    $el.select('.y-axis').call(this.yAxis);
    $el.select('.gridlines').call(this.yGridlines);
    $el.select('.x-axis').call(this.xAxis);
  }
}
