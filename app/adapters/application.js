import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class Application extends JSONAPIAdapter {
  namespace = 'api/v2';
  coalesceFindRequests = true;

  get headers() {
    if (this.session.isAuthenticated) {
      return this.session.header;
    }
    return null;
  }

  shouldBackgroundReloadRecord() {
    return false;
  }

  shouldBackgroundReloadAll() {
    return false;
  }
}
