import EmberRouter from '@ember/routing/router';
import config from 'emberconf-22/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('d3-bar-chart');
  this.route('bar-chart');
  this.route('bar-chart-accessible');
  this.route('cartesian-chart');
  this.route('marimekko');
  this.route('animated');
});
