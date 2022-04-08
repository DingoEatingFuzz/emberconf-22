import Component from '@glimmer/component';
import { tracked, cached } from '@glimmer/tracking';
import { action } from '@ember/object';
import * as d3 from 'd3';

export default class D3BarChart extends Component {
  @tracked sortDirection = 'desc';

  @cached
  get parentCategories() {
    return this.args.categories.filter((cat) => !cat.parent);
  }

  @cached
  get popularAddons() {
    return this.args.addons.filter((addon) => addon.lastMonthDownloads > 100);
  }

  @cached
  get addonsByCategory() {
    /*
     * [
     *  { category: '', addons: [ { name: '', score: 5 } ] }
     * ]
     */
    const topCategories = this.parentCategories
      .reduce((set, category) => {
        set.push({
          category,
          addons: this.popularAddons.filter((addon) =>
            addon.categories.includes(category)
          ),
        });
        return set;
      }, [])
      .map((d) => {
        d.avgScore = d3.mean(d.addons, (d) => d.score);
        return d;
      })
      .sortBy('addons.length')
      .reverse()
      .slice(0, 15);

    return this.sortDirection === 'desc'
      ? topCategories.sortBy('avgScore').reverse()
      : topCategories.sortBy('avgScore');
  }

  @action
  toggleSort() {
    this.sortDirection = this.sortDirection === 'desc' ? 'asc' : 'desc';
  }
}
