Ext.define('PeopleApp.store.CityStore', {
    extend: 'Ext.data.Store',
    model: 'PeopleApp.model.City',
    autoLoad: true,
    storeId: 'citystore',
    proxy: {
        type: 'ajax',
        url: 'app/data/cities.php',
        reader: {
            type: 'json',
            rootProperty: 'cities',
            successProperty: 'success'
        }
    }
});