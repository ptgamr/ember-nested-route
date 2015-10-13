import Ember from 'ember';

export default Ember.Controller.extend({
  shopsCtrl: Ember.inject.controller('shops'),
  modelDidChange: Ember.observer('model', function() {
    let model = this.get('model'),
        selectedShop = this.get('shopsCtrl.selection');

    if (!selectedShop) {
      this.set('shopsCtrl.selection', model);
    }
  })
});
