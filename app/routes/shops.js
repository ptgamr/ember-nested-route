import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('shop').then(shops => shops.toArray());
  },

  afterModel: function(model, transition) {
    if ('shops.index' === transition.targetName) {
      model.get('firstObject').set('selected', true);
      this.transitionTo('shops.show', model.get('firstObject'));
    }
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('selection', model.findBy('selected', true));
  }
});
