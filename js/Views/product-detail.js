'use strict'
MercadoLivreApp.Views.ProductDetail = Backbone.View.extend({
	el: $('#result'),
	breadcrumb: $('#breadcrumb'),
	template: _.template($('#itemDetailTemplate').html()),
	templateError: _.template($('#itemDetailErrorTemplate').html()),
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
		
		if(results[0].status == 404) {
			this.$el.html(this.templateError());
			return;
		}

		product = { ...results[0], ...results[1] };
		
		console.log(product);
		
		product.formated_price = (product.price).formatMoney(0, '', '.');
		product.condition_text = product.condition === 'new' ? 'Novo' : 'Usado';
		product.description    = product.plain_text.replace(/(?:\r\n|\r|\n)/g, '<br>');
		
		this.$el.html(this.template(product));

		// breadcrumb (category)
		this.breadcrumb.html(product.category_id);

		// SEO: change the description and image from head
		PAGE_DESC.content = product.title;
		PAGE_IMG.content  = product.pictures[0].url;
		PAGE_URL.href	  = document.URL;
	}
});