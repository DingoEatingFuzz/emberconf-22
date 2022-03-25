import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class Application extends JSONAPIAdapter {
  namespace = 'api/v2';
  coalesceFindRequests = true;

  get headers() {
    return null;
  }

  shouldBackgroundReloadRecord() {
    return false;
  }

  shouldBackgroundReloadAll() {
    return false;
  }
}
