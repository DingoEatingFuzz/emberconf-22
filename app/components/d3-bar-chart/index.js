import Component from '@glimmer/component';
import { action } from '@ember/object';
import * as d3 from 'd3';

export default class D3BarChart extends Component {
  yLabel = 'Avg. Rating';

  @action
  mount(el) {
    // Only chart the top 15 categories by number of addons
    let data = this.args.data.sortBy('addons.length').reverse().slice(0, 15);

    // Compute average score
    data.forEach((d) => {
      d.avgScore = d3.mean(d.addons.mapBy('score'));
    });

    // Sort by average score descending
    data = data.sortBy('avgScore').reverse();

    // Aesthetic measurements
    const height = 400;
    const width = 900;
    const marginTop = 20;
    const marginBottom = 30;
    const marginLeft = 40;
    const marginRight = 0;
    const color = '#e74500';

    // Y-axis derivation
    const yRange = [height - marginBottom, marginTop];
    const yDomain = [0, 10];
    const yScale = d3.scaleLinear(yDomain, yRange);
    const yAxis = d3.axisLeft(yScale);

    // X-axis derivation
    const xRange = [marginLeft, width - marginRight];
    const xDomain = data.mapBy('category.name');
    const xScale = d3.scaleBand().domain(xDomain).range(xRange);
    const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);

    // Hydrate svg element & decorate
    const svg = d3
      .select(el)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width:100%; height: auto; overflow: visible');

    // Add the y-axis
    svg
      .append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(yAxis)
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .selectAll('.tick line')
          .clone()
          .attr('x2', width - marginLeft - marginRight)
          .attr('stroke-opacity', 0.1)
      )
      .call((g) =>
        g
          .append('text')
          .attr('x', -marginLeft)
          .attr('y', 10)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'end')
          .text(this.yLabel)
      );

    // Add bars
    svg
      .append('g')
      .attr('fill', color)
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (d) => xScale(d.category.name) + 5)
      .attr('y', (d) => yScale(d.avgScore))
      .attr('height', (d) => yScale(0) - yScale(d.avgScore))
      .attr('width', xScale.bandwidth() - 10);

    // Add the x-axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(xAxis)
      .call((g) =>
        g
          .selectAll('.tick text')
          .attr('text-anchor', 'end')
          .attr('transform', 'rotate(-45)')
      );
  }
}
