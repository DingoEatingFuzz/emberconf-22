import Model, { hasMany, belongsTo, attr } from '@ember-data/model';

export default class Version extends Model {
  @attr('string')
  version;

  @attr('string')
  addonName;

  @attr('date')
  released;

  @attr('string')
  emberCliVersion;

  @belongsTo('addon', { inverse: 'versions' })
  addon;

  @belongsTo('review')
  review;

  @belongsTo('addon-size')
  addonSize;

  @hasMany('addon-dependency')
  dependencies;
}
