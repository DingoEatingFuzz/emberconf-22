import { cached } from '@glimmer/tracking';
import Model, { belongsTo, attr } from '@ember-data/model';

export default class AddonDependency extends Model {
  @attr('string')
  package;

  @attr('string')
  dependencyType;

  @belongsTo('version')
  dependentVersion;

  @belongsTo('addon')
  packageAddon;

  @cached
  get isDependency() {
    return this.dependencyType === 'dependencies';
  }

  @cached
  get isDevDependency() {
    return this.dependencyType === 'devDependencies';
  }

  get addonSize() {
    return this.packageAddon.latestAddonVersion.addonSize;
  }
}
