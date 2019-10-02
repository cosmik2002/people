Ext.define('PeopleApp.controller.People', {
    extend: 'Ext.app.Controller',
 
    views: ['PeopleList','PeopleFilter', 'Person','StoreCheckboxGroup'],
	stores: ['PersonStore','CityStore'],
    models: ['Person','City'],
    init: function() {
		//debugger; 
		this.selEducation = []; 
		this.selCities = []; 
		this.control({
            'viewport > peoplefilter > storecheckboxgroup#citiesfilter': {
                change: this.checkCity
            },
            'viewport > peoplefilter > storecheckboxgroup#educationfilter': {
                change: this.checkEducation
            },
            'viewport > peoplelist': {
                itemdblclick: this.editPerson
            },
            'personwindow button[action=new]': {
                click: this.createPerson
            },
            'personwindow button[action=save]': {
                click: this.updatePerson
            },
            'personwindow button[action=delete]': {
                click: this.deletePerson
            },
            'personwindow button[action=clear]': {
                click: this.clearForm
            }
        });
    },
	//var selCities,selEducation;
	filterStore: function (store){
		store.clearFilter();
		var selCities = this.selCities, selEducation = this.selEducation;
		store.filterBy(function(record){
			//debugger;
			var cities = record.get('cities').split(",");
			
			var ct = selCities.filter(function(item){
				if(cities.indexOf(item)!=-1)
						return true;
					else 
						return false;
			});
			
			if((selCities.length==0 || ct.length>0) && (selEducation.length==0 || selEducation.indexOf(record.get('education_id')) != -1)){
				return true;
			}else
				return false;
		});
	},
    checkCity: function(field, newValue, oldValue){
		//debugger;
        var store = Ext.widget('peoplelist').getStore();
			this.selCities = [];
			if(typeof newValue.Name != 'undefined')
			if(!Array.isArray(newValue.Name)) 
				this.selCities.push(newValue.Name);
			else this.selCities = this.selCities.concat(newValue.Name);
		this.filterStore(store);
	},
    checkEducation: function(field, newValue, oldValue){
		//debugger;
		//console.log(field+ newValue.Name+ oldValue);
        var store = Ext.widget('peoplelist').getStore();
			this.selEducation = []; 
			if(typeof newValue.Name != 'undefined')
			if(!Array.isArray(newValue.Name)) 
				this.selEducation.push(newValue.Name);
			else this.selEducation = this.selEducation.concat(newValue.Name);
		this.filterStore(store);
	},
	// обновление
    updatePerson: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues(),
            id = form.getRecord().get('id');
		//debugger;	
		//var v =	form.down('combobox').getValue();
            values.id=id;
        Ext.Ajax.request({
            url: 'app/data/update.php',
            params: values,
            success: function(response){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    var store = Ext.widget('peoplelist').getStore();
                    store.load();
                    //Ext.Msg.alert('Обновление',data.message);
                }
                else{
                    Ext.Msg.alert('Обновление','Не удалось обновить');
                }
            }
        });
    },
    // создание
    createPerson: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            url: 'app/data/create.php',
            params: values,
            success: function(response, options){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    Ext.Msg.alert('Создание',data.message);
                    var store = Ext.widget('peoplelist').getStore();
                    store.load();
                }
                else{
                    Ext.Msg.alert('Создание','Не удалось добавить');
                }
            }
        });
    },
    // удаление
    deletePerson: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            id = form.getRecord().get('id');
        Ext.Ajax.request({
            url: 'app/data/delete.php',
            params: {id:id},
            success: function(response){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    Ext.Msg.alert('Удаление',data.message);
                    var store = Ext.widget('peoplelist').getStore();
                    var record = store.getById(id);
                    store.remove(record);
                    form.getForm.reset();
                }
                else{
                    Ext.Msg.alert('Удаление','Не удалось удалить');
                }
            }
        });
    },
    clearForm: function(grid, record) {
        var view = Ext.widget('personwindow');
        view.down('form').getForm().reset();
    },
    editPerson: function(grid, record) {
        var view = Ext.widget('personwindow');
        view.down('form').loadRecord(record);
    }
});