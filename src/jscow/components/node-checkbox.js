
jsCow.res.components.nodecheckbox = function() { };
jsCow.res.components.nodecheckbox.prototype = {

	init: function() {
		
		this.addController(jsCow.res.controller.nodecheckbox);
		this.addModel(jsCow.res.model.nodecheckbox);
		this.addView(jsCow.res.view.nodecheckbox);
		
		return this;
	}

};

jsCow.res.model.nodecheckbox = function() {
	
	this.data = {
		enabled: true,
		visible: true,
		value: null,
		selected: false
	};
	
};
jsCow.res.model.nodecheckbox.prototype = {

	init: function() {
		this.trigger("model.ready", this.data);
	}
	
};

jsCow.res.view.nodecheckbox = function() {
	
	this.dom = {};
	this.dom.main = $('<label/>')
		.addClass('jsc-node-type-checkbox');
	this.dom.content = $('<input type="checkbox" value="" />')
		.addClass('jsc-node-type-checkbox-content')
		.appendTo(this.dom.main);
	this.dom.title = $('<span/>')
		.addClass('jsc-node-type-checkbox-title')
		.appendTo(this.dom.main);

};
jsCow.res.view.nodecheckbox.prototype = {
	
	init: function(e) {
		var self = this;

		this.dom.content
			.on('dblclick', function(e) {
				e.preventDefault();
				e.stopPropagation();
			}).on('change', function(e) {
				
				self.cmp().config({
					selected: $(this).is(':checked')
				});
				self.trigger('node.config.changed');

			});

		this.trigger("view.update", e.data);
		
	},
	
	update: function(e) {	
		
		if (e.data.enabled) {
			
			this.dom.main.removeClass('jsc-node-type-checkbox-disabled').addClass('jsc-node-type-checkbox');
			
			if (e.data.value) {
				this.dom.content.val(e.data.value);
			}
			if (e.data.selected) {
				this.dom.content.prop('checked', e.data.selected);
			}
			if (e.data.title) {
				this.dom.title.html(e.data.title);
			}

			if (e.data.visible) {
				this.dom.main.show();
			}else{
				this.dom.main.hide();
			}
			
		}else{
			
			this.dom.main.removeClass('jsc-node-type-checkbox').addClass('jsc-node-type-checkbox-disabled');
			
		}
	}
	
};

jsCow.res.controller.nodecheckbox = function() {};
jsCow.res.controller.nodecheckbox.prototype = {
	
	init: function() {
		this.on("model.ready", this.isModelReady);
		this.on("title", this.title);
	},
	
	isModelReady: function() {
		this.trigger("view.init", this.cmp().config());
	}

};
