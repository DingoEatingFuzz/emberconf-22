import Model, { hasMany, attr } from '@ember-data/model';

export default class Keyword extends Model {
  @attr('string')
  keyword;

  @hasMany('addon')
  addons;
}
