import { cached } from '@glimmer/tracking';
import Model, { belongsTo, attr } from '@ember-data/model';

export const questions = [
  { text: 'Are there meaningful tests?', fieldName: 'hasTests' },
  { text: 'Is the README filled out?', fieldName: 'hasReadme' },
  { text: 'Does the addon have a build?', fieldName: 'hasBuild' },
];

export default class Review extends Model {
  questions = questions;

  @attr('string')
  review;

  @attr('date')
  createdAt;

  @attr('number')
  hasTests;

  @attr('number')
  hasReadme;

  @attr('number')
  hasBuild;

  @belongsTo('version')
  version;

  get versionReleased() {
    return this.version.released;
  }

  @cached
  get score() {
    let s = 2;
    /* eslint-disable */
    if (this.hasTests === 1) {
      s++;
    }
    if (this.hasBuild === 1) {
      s++;
    }
    if (this.hasReadme === 1) {
      s++;
    }
    /* eslint-enable */
    return s;
  }
}
