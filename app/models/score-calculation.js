import Model, { attr, belongsTo } from '@ember-data/model';

export default class ScoreCalculation extends Model {
  @attr()
  info;

  @belongsTo()
  addon;

  @belongsTo()
  addonVersion;
}
