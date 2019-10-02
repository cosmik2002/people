Ext.define('PeopleApp.store.EducationStore', {
    extend: 'Ext.data.Store',
    model: 'PeopleApp.model.Education',
    autoLoad: true,
    storeId: 'educationstore',
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