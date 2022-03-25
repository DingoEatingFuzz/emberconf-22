import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class TestResult extends Model {
  @attr('boolean')
  succeeded;

  @attr('string')
  statusMessage;

  @attr('date')
  createdAt;

  @attr('boolean')
  canary;

  @attr('string')
  output;

  @attr('string')
  outputFormat;

  @attr('string')
  semverString;

  @belongsTo('version')
  version;

  @hasMany('emberVersionCompatibility')
  emberVersionCompatibilities;

  get testsRunAt() {
    return this.createdAt;
  }
}
