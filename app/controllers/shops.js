import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  actions: {
    navigate(selection) {
      this.transitionToRoute('shops.show', selection.get('id'));
    }
  }
});
