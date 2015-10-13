import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('shops', {}, function() {
    this.route('show', {});
  });
});

export default Router;
