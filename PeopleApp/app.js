Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'PeopleApp',
    appFolder: 'app',
	controllers: ['People'],
     
    launch: function() {
        Ext.create('Ext.container.Viewport', {
layout: {
                type: 'vbox',
                align: 'stretch'
            },            items: [
				{
					xtype: 'peoplefilter',
				},
				{
                xtype: 'peoplelist',
				}
			]	
        });
    }
});