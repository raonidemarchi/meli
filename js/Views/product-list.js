'use strict'
MercadoLivreApp.Views.ProductList = Backbone.View.extend({
	el: $('#result'),
	breadcrumb: $('#breadcrumb'),
	template: _.template($('#itemTemplate').html()),
	collection: new MercadoLivreApp.Collections.ProductList,
	
	initialize: function(options) {
		this.render(options === undefined ? { query: null } : options);
	},
	
	render: function(options) {
		this.search(options.query);
		document.querySelector('input[name=query]').value = options.query;
	},
	
	search: async function(query = '') {
		let products = [];
		
		this.$el.html('Carregando...');
		
		products = await this.collection.fetch({ data: { query: query }});
		
		this.$el.html('');
		this.breadcrumb.html('');
		console.log(products);
		
		for(let i in products.results) {
			// format price
			products.results[i].formated_price = (products.results[i].price).formatMoney(0, '', '.');
			products.results[i].url_title      = products.results[i].title.replace(/[ ,-]/g, '_');
			
			this.$el.append(this.template(products.results[i]));
			
			// add the category breadcrumb
			this.breadcrumb.append(products.results[i].title.split(' ')[0]);
			
			if(+i + 1 < products.results.length) {
				this.$el.append('<hr>');
				this.breadcrumb.append('<span class="breadcrumb-space">></span>');
			}
		}
	}
});