import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    navigate(selection) {
      this.transitionToRoute('shops.show', selection.get('id'));
    }
  }
});
