import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('shop', params.shop_id, {reload: true});
  },
  afterModel(shop, transition) {
    if ('shops.show.index' === transition.targetName) {
      this.transitionTo('shops.show.category', shop.get('categories.firstObject.id'));
    }
  }
});
