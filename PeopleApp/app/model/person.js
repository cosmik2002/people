Ext.define('PeopleApp.model.Person', {
    extend: 'Ext.data.Model',
    fields: ['id','name', 'education','cities','education_id'],
	 hasMany: [{
		foreignKey: 'person_id',
        model: 'PeopleApp.model.Cities',
        name: 'city'
        }],
    proxy: {
        type: 'ajax',
        url: 'app/data/people.php',
        reader: {
            type: 'json',
            root: 'people',
            successProperty: 'success'
        }
    }
});