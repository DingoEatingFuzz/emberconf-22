import Component from '@glimmer/component';
import { get } from '@ember/object';
import { tracked, cached } from '@glimmer/tracking';
import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import { task } from 'ember-concurrency';
import * as d3 from 'd3';

const aggregators = {
  mean: d3.mean,
  sum: d3.sum,
};

const raf = () =>
  new Promise((resolve) => window.requestAnimationFrame(resolve));

export default class CartesianChart extends Component {
  @tracked height = 1;
  @tracked width = 1;
  @tracked element = null;
  @tracked _data = null;

  @tracked reverse = false;

  // Derived once the axes are rendered
  @tracked xAxisHeight = 0;
  @tracked yAxisWidth = 0;

  @cached get xAxisOffset() {
    return this.height - this.xAxisHeight;
  }

  // Data is now derived from xLimit, yProp, and yAgg
  @cached get data() {
    if (this._data) return this._data;

    const { xLimit, xProp, xSizeProp, yProp, yAgg } = this.args;
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
      d.$value = get(d, xProp);
      d.$size = xSizeProp ? get(d, xSizeProp) : 0;
    });

    return data; // .sortBy('$field').reverse();
  }

  @action sort() {
    const oldData = this.data.map(({ $field, $value, $size }) => ({
      $field,
      $value,
      $size,
    }));
    this.reverse = !this.reverse;

    let newData = [...oldData].sortBy('$field');
    if (this.reverse) {
      newData = newData.reverse();
    }

    this.animate.perform(oldData, newData);
  }

  @task
  *animate(oldData, newData, duration = 500) {
    const start = window.performance.now();
    const interpolator = d3.interpolate(oldData, newData);

    let now = 0;
    while (now < duration) {
      now = window.performance.now() - start;
      this._data = interpolator(Math.min(1, now / duration));
      this.mountElements(this.element);
      yield raf();
    }
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
  @cached get xDomainSum() {
    return [0, d3.sum(this.data, (d) => d.$size)];
  }
  @cached get xScale() {
    return d3.scaleBand().domain(this.xDomain).range(this.xRange);
  }
  @cached get xScaleLinear() {
    return d3.scaleLinear().domain(this.xDomainSum).range(this.xRange);
  }
  @cached get xAxis() {
    const xScale = this.args.xSizeProp ? this.xScaleLinear : this.xScale;
    const axis = d3.axisBottom(xScale).tickSizeOuter(0);
    if (this.args.xSizeProp) {
      axis.tickValues([0, ...d3.cumsum(this.data, (d) => d.$size)]);
    }
    return axis;
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
