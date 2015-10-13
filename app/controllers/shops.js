import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  selectionDidChange: Ember.observer('selection', function() {
    let selection = this.get('selection');
    if (selection) {
      this.transitionToRoute('shops.show', selection.get('id'));
    }
  })
});
