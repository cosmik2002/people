Ext.define('PeopleApp.view.Person', {
    extend: 'Ext.window.Window',
    alias: 'widget.personwindow',
 
    title: 'Человек',
    //layout: 'fit',
    autoShow: true,
 
    initComponent: function() {
        this.items = [{
                xtype: 'form',
                items: [{
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Имя'
                    },
					{
                        xtype: 'combobox',
                        name : 'education_id',
                        fieldLabel: 'Образование',
						store: 'educationstore',
						valueField: 'id',  
						displayField: 'education'
						
                    }]
            }];
        this.dockedItems=[{
            xtype:'toolbar',
            docked: 'top',
            items: [{
                text:'Создать',
                iconCls:'new-icon',
                action: 'new'
            },{
                text:'Сохранить',
                iconCls:'save-icon',
                action: 'save'
            },{
                text:'Удалить',
                iconCls:'delete-icon',
                action: 'delete'
            }]
        }];
        this.buttons = [{
                text: 'Очистить',
                scope: this,
                action: 'clear'
        }];
 
        this.callParent(arguments);
    }
});