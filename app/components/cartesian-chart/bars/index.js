import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import { format } from 'd3';

/** Args
 * data
 * xScale
 * yScale
 */

export default class CartesianChartBars extends Component {
  // Apply geometric computations on the dataset for use in the template
  @cached get computedData() {
    const { data, xScale, yScale } = this.args;
    if (!xScale.bandwidth)
      throw new Error(
        'CartesianChart::Bars can only be used with an ordinal scale'
      );

    const formatter = format('.1f');
    return data.map((d) => ({
      ...d,
      x: xScale(d.$value) + 5,
      y: yScale(d.$field),
      formattedValue: d.$value,
      formattedField: formatter(d.$field),
      height: yScale(0) - yScale(d.$field),
      width: xScale.bandwidth() - 10,
    }));
  }
}
