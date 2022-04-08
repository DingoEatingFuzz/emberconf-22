import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import { format } from 'd3';

/** Args
 * data
 * xScale
 * yScale
 */

export default class CartesianChartMarimekko extends Component {
  // The placement of each bar is dependent on the aggregate sizes of
  // all previous bars. That aggregation is computed here.
  @cached get intermediateData() {
    let sum = 0;
    return this.args.data.map((d) => {
      const datum = { ...d, $sumTo: sum };
      sum += d.$size;
      return datum;
    });
  }
  // Apply geometric computations on the dataset for use in the template
  @cached get computedData() {
    const { xScale, yScale } = this.args;

    const formatter = format('.1f');
    return this.intermediateData.map((d) => ({
      ...d,
      x: xScale(d.$sumTo),
      y: yScale(d.$field),
      formattedValue: d.$value,
      formattedField: formatter(d.$field),
      formattedSize: Math.round(d.$size),
      height: yScale(0) - yScale(d.$field),
      width: xScale(d.$size) - xScale(0) - 1,
      labelX: xScale(d.$size / 2) - xScale(0) - 1,
    }));
  }
}
