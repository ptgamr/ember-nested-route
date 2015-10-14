import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  shouldReloadAll() {
    return true;
  },
  shouldBackgroundReloadRecord() {
    return true;
  }
});
