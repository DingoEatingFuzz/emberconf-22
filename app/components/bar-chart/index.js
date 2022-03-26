import Component from '@glimmer/component';
import { tracked, cached } from '@glimmer/tracking';
import { action } from '@ember/object';
import * as d3 from 'd3';

export default class BarChart extends Component {
  yLabel = 'Avg. Rating';

  @tracked width = 900;
  @tracked height = 400;

  @tracked marginTop = 20;
  @tracked marginBottom = 30;
  @tracked marginLeft = 40;
  @tracked marginRight = 0;

  @tracked color = '#e74500';

  @cached get xAxisOffset() {
    return this.height - this.marginBottom;
  }

  @cached get data() {
    // Only chart the top 15 categories by number of addons
    const data = this.args.data.sortBy('addons.length').reverse().slice(0, 15);

    // Compute average score
    data.forEach((d) => {
      d.avgScore = d3.mean(d.addons.mapBy('score'));
    });

    // Sort by average score descending
    return data.sortBy('avgScore').reverse();
  }

  @cached get yRange() {
    return [this.height - this.marginBottom, this.marginTop];
  }
  @cached get yDomain() {
    return [0, 10];
  }
  @cached get yScale() {
    return d3.scaleLinear(this.yDomain, this.yRange);
  }
  @cached get yAxis() {
    return d3.axisLeft(this.yScale);
  }

  @cached get xRange() {
    return [this.marginLeft, this.width - this.marginRight];
  }
  @cached get xDomain() {
    return this.data.mapBy('category.name');
  }
  @cached get xScale() {
    return d3.scaleBand().domain(this.xDomain).range(this.xRange);
  }
  @cached get xAxis() {
    return d3.axisBottom(this.xScale).tickSizeOuter(0);
  }

  // Apply geometric computations on the dataset for use in the template
  @cached get computedData() {
    return this.data.map((d) => ({
      ...d,
      x: this.xScale(d.category.name) + 5,
      y: this.yScale(d.avgScore),
      height: this.yScale(0) - this.yScale(d.avgScore),
      width: this.xScale.bandwidth() - 10,
    }));
  }

  @action
  mountElements() {
    d3.select('.y-axis')
      .call(this.yAxis)
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .selectAll('.tick line')
          .clone()
          .attr('x2', this.width - this.marginLeft - this.marginRight)
          .attr('stroke-opacity', 0.1)
      );

    d3.select('.x-axis')
      .call(this.xAxis)
      .call((g) =>
        g
          .selectAll('.tick text')
          .attr('text-anchor', 'end')
          .attr('transform', 'rotate(-45)')
      );
  }
}
