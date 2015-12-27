var app = {

	renderHomeView: function() {
	    $('body').html(this.homeTpl());
	    $('.search-key').on('keyup', $.proxy(this.findByName, this));
	},

	/* If navigator.notification is available, use its alert() function. Otherwise, use the default browser alert() function. */
	showAlert: function (message, title) {
	    if (navigator.notification) {
	        navigator.notification.alert(message, null, title, 'OK');
	    } else {
	        alert(title ? (title + ": " + message) : message);
	    }
	},

    findByName: function() {
        console.log('findByName');
        var self = this;
	    this.store.findByName($('.search-key').val(), function(employees) {
	        $('.employee-list').html(self.employeeLiTpl(employees));
	    });
    },

    initialize: function() {
	    
	    this.homeTpl = Handlebars.compile($("#home-tpl").html());
		this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
	    
	    var self = this;
        this.store = new LocalStorageStore(function() {
	        //self.showAlert('LocalStore Initialised', 'Info');
	        self.renderHomeView();
	    });
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    }

};

app.initialize();