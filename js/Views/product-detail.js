'use strict'
MercadoLivreApp.Views.ProductDetail = Backbone.View.extend({
	el: $('#result'),
	template: _.template($('#itemDetailTemplate').html()),
	collection: new MercadoLivreApp.Collections.ProductDetail,
	collectionDescription: new MercadoLivreApp.Collections.ProductDescription,
	
	initialize: function(options) {
		this.render(options === undefined ? {} : options);
	},
	
	render: function(options) {
		if(options.id !== undefined)
			this.getItem(options.id);
	},
	
	getItem: async function(id = '') {
		let results = [];
		let product = {};
		
		this.$el.html('Carregando...');
		
		results = await Promise.all([
			this.collection.fetch({ data: { id: id }}),
			this.collectionDescription.fetch({ data: { id: id }})
		]);
		
		product = { ...results[0], ...results[1] };
		
		console.log(product);
		
		product.formated_price = (product.price).formatMoney(0, '', '.');
		product.condition_text = product.condition === 'new' ? 'Novo' : 'Usado';
		product.description    = product.plain_text.replace(/(?:\r\n|\r|\n)/g, '<br>');
		
		this.$el.html(this.template(product));
	}
});