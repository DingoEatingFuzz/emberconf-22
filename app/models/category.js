import { dasherize } from '@ember/string';
import { cached } from '@glimmer/tracking';
import Model, { hasMany, belongsTo, attr } from '@ember-data/model';

export default class Category extends Model {
  @attr('string')
  name;

  @attr('string')
  description;

  @attr('number')
  position;

  @attr('number')
  addonCount;

  @hasMany('addon')
  addons;

  @belongsTo('category', { async: false, inverse: 'subcategories' })
  parent;

  @hasMany('category', { inverse: 'parent', async: false })
  subcategories;

  @cached
  get slug() {
    return dasherize(this.name);
  }

  @cached
  get displayName() {
    if (this.parent) {
      return `${this.parent.name} > ${this.name}`;
    } else {
      return this.name;
    }
  }

  @cached
  get totalAddonCount() {
    return this.subcategories
      .mapBy('addonCount')
      .reduce(function (categoryA, categoryB) {
        return categoryA + categoryB;
      }, this.addonCount);
  }
}
