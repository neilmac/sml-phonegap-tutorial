var app = {

	/* If navigator.notification is available, use its alert() function. Otherwise, use the default browser alert() function. */
	showAlert: function (message, title) {
	    if (navigator.notification) {
	        navigator.notification.alert(message, null, title, 'OK');
	    } else {
	        alert(title ? (title + ": " + message) : message);
	    }
	},

    initialize: function() {
	    
	    var self = this;
        this.store = new LocalStorageStore(function() {
	        //self.showAlert('LocalStore Initialised', 'Info');
	        $('body').html(new HomeView(self.store).render().el);
	    });
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    }

};

app.initialize();