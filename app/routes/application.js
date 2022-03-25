import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';
import { service } from '@ember/service';
import { worker } from 'emberconf-22/mocks/browser';

export default class ApplicationRoute extends Route {
  @service store;

  beforeModel() {
    // TODO: This should be in an initializer but whatevs
    const env = getOwner(this).resolveRegistration('config:environment');
    if (env.environment === 'development') {
      console.info('Starting MSW');
      worker.start();
    }
  }

  async model() {
    const [addons, categories] = await Promise.all([
      this.store.findAll('addon'),
      this.store.findAll('category'),
    ]);

    return { addons, categories };
  }
}
