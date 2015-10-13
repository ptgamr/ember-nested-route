import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('shop').then(shops => shops.toArray());
  },

  setupController(controller, model) {
    this._super(controller, model);
    //controller.notifyPropertyChange('selection');
    //controller.set('futureSelection', model.get('firstObject'));
  },

  // onDeactivate: function(){
  //   this.controller.set('selection', null);
  // }.on('deactivate'),
  //
  // onSelectedShopChanged(controller, key) {
  //   let selection = controller.get(key);
  //
  //   if (!selection) {
  //     selection = controller.get('model.firstObject');
  //     controller.set(key, selection);
  //   }
  //
  //   controller.transitionToRoute('shops.show', selection.get('id'));
  // },
  //
  // actions: {
  //   didTransition() {
  //     Ember.Logger.info('>>> shops: did transition');
  //     if (!this.controller.get('selectedValue')) {
  //       //make the first one selected
  //       this.controller.notifyPropertyChange('selectedValue');
  //     }
  //     return true;
  //   }
  // }
});
