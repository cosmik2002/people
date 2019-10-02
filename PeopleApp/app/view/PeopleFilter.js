Ext.define('PeopleApp.view.PeopleFilter',{
		extend: 'Ext.panel.Panel', 
		alias: 'widget.peoplefilter',
		layout: {
                type: 'hbox',
                align: 'stretch'
        },
		title: 'Фильтр',
        items: [
            {
                xtype: 'storecheckboxgroup',
                id: 'citiesfilter',
				title: 'Города',
				columns: 1,
				mapFn: function(storeItem) {
                return {
                    xtype:'checkbox',
                    boxLabel: storeItem.get("city"),
                    name: 'Name',
                    inputValue: storeItem.get("city")
                };
            },
			store: 'PeopleApp.store.CityStore',
    		flex: 1
            },
            {
                xtype: 'storecheckboxgroup',
                id: 'educationfilter',
                title: 'Образование',
				columns: 1,
				mapFn: function(storeItem) {
                return {
                    xtype:'checkbox',
                    boxLabel: storeItem.get("education"),
                    name: 'Name',
                    inputValue: storeItem.get("id")
                };
            },
			store: 'PeopleApp.store.EducationStore',
    		flex: 1
            },
        ]
});