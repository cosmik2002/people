Ext.define('PeopleApp.store.PersonStore', {
    extend: 'Ext.data.Store',
    model: 'PeopleApp.model.Person',
    autoLoad: true,
    storeId: 'personstore',
});