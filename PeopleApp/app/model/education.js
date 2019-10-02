Ext.define('PeopleApp.model.Education', {
    extend: 'Ext.data.Model',
    fields: ['id','education'],
    proxy: {
        type: 'ajax',
        url: 'app/data/education.php',
        reader: {
            type: 'json',
            root: 'education',
            successProperty: 'success'
        }
    }
	
});