import Ember from 'ember';

export default Ember.Controller.extend({
  shopsCtrl: Ember.inject.controller('shops'),

  modelDidChange: Ember.observer('model', function() {
    let model = this.get('model'),
        selectedShop = this.get('shopsCtrl.selectionFromChild');

    if (!selectedShop) {
      Ember.Logger.info('>>> shops.show: set selected from show');
      this.set('shopsCtrl.selectionFromChild', model);
    }
  })
});
