import Model, { belongsTo, attr } from '@ember-data/model';

export default class EmberVersionCompatibility extends Model {
  @belongsTo('version')
  version;

  @attr('string')
  emberVersion;

  @attr('boolean')
  compatible;
}
