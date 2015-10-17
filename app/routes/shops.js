import Ember from 'ember';

export default Ember.Route.extend({

  shopId: 1,

  model() {
    return this.store.findAll('shop');
  },

  afterModel: function(model, transition) {
    if (transition.targetName === 'shops.index') {
      const firstShop = model.get('firstObject');
      this.transitionTo('shops.show', firstShop);
    }
    this.set('shopId', transition.params['shops.show']['shop_id']);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('selectedShop', this.store.peekRecord('shop', this.get('shopId')));
  },

  actions: {
    navigate(selection, component) {
      if (selection) {
        this.get('controller').set('selectedShop', selection);
        this.transitionTo('shops.show', selection.get('id'));
      }
    }
  }
});
