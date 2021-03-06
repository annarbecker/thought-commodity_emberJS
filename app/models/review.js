import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  comment: DS.attr(),
  rating: DS.attr('number'),
  item: DS.belongsTo('item', {async:true}),
  date: DS.attr()
});
