import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('shop');
  },
  setupController: function setupController(controller, model) {
    let list = model.toArray();
    controller.set('list', list);

    // nothing selected to start.
    // This can be changed to model[0], model[1],
    // etc. to show starting with a non-empty selection
    controller.set('selectedValue',list[0]);
  }
});
