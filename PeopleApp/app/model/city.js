Ext.define('PeopleApp.model.City', {
    extend: 'Ext.data.Model',
    fields: ['city'],
    proxy: {
        type: 'ajax',
        url: 'app/data/cities.php',
        reader: {
            type: 'json',
            root: 'cities',
            successProperty: 'success'
        }
    }
	
});