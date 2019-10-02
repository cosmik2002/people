Ext.define('PeopleApp.view.StoreCheckboxGroup', {
            extend: 'Ext.form.CheckboxGroup',
            xtype: 'storecheckboxgroup', 
			initComponent: function() {
                var me = this;
                me.store = Ext.create(me.store);
				if (!me.store) throw "No store defined for StoreCheckboxGroup";
                if (!me.mapFn) throw "No mapFn defined for StoreCheckboxGroup";
                if (me.items) throw "Items may not be defined for StoreCheckboxGroup; we get them from the store!";
                var checklistStore = me.store, 
                    renderCheckboxes = function() {
                        me.removeAll();
                        me.add(
                        checklistStore.getRange().map(me.mapFn)); 
                    };
                me.callParent(arguments);
                renderCheckboxes(); 
                checklistStore.on({
                    load: renderCheckboxes, 
                    update: renderCheckboxes, 
                    datachanged: renderCheckboxes, 
                    filterchange: renderCheckboxes 
                });
            }
        });