import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),

  selection: Ember.computed.oneWay('selectionFromChild'),
  selectionFromChild: null,
  selectionFromChildHasBeenUsed: false,


  selectionDidChange: Ember.observer('selection', function() {
    let selection = this.get('selection'),
        selectionFromChild = this.get('selectionFromChild'),
        selectionFromChildHasBeenUsed = this.get('selectionFromChildHasBeenUsed');

    if (selectionFromChild && !selectionFromChildHasBeenUsed) {
      this.set('selectionFromChildHasBeenUsed', true);
      return;
    }

    if (selection) {
      this.transitionToRoute('shops.show', selection.get('id'));
    }
  })
});
