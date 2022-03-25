import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  dependentVersion: belongsTo('version'),
  packageAddon: belongsTo('addon'),
});
