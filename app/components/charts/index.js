import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';

export default class D3BarChart extends Component {
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
    console.log('Total addons:', this.args.addons.length);
    console.log('Popular addons:', this.popularAddons.length);
    /*
     * [
     *  { category: '', addons: [ { name: '', score: 5 } ] }
     * ]
     */
    return this.parentCategories.reduce((set, category) => {
      set.push({
        category,
        addons: this.popularAddons.filter((addon) =>
          addon.categories.includes(category)
        ),
      });
      return set;
    }, []);
  }
}
