Ext.define('PeopleApp.view.PeopleList' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.peoplelist',
    title: 'Люди',
    store: 'personstore',
     
    initComponent: function() {
        this.columns = [
            {header: 'Имя',  dataIndex: 'name',  flex: 1},
            {header: 'Образование',  dataIndex: 'education',  flex: 1},
            {header: 'Города',  dataIndex: 'cities',  flex: 1},
        ];
         
        this.callParent(arguments);
    }
});