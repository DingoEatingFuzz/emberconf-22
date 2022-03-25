import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';

export default class D3BarChart extends Component {
  @cached
  get parentCategories() {
    return this.args.categories.filter((cat) => !cat.parent);
  }

  @cached
  get addonsByCategory() {
    /*
     * [
     *  { category: '', addons: [ { name: '', score: 5 } ] }
     * ]
     */
    return this.parentCategories.reduce((set, category) => {
      set.push({
        category,
        addons: this.args.addons.filter((addon) =>
          addon.categories.includes(category)
        ),
      });
      return set;
    }, []);
  }
}
