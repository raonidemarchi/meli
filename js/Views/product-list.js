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
		let products 	  = [];
		let categoryLimit = 4;
		
		this.$el.html('Carregando...');
		
		products = await this.collection.fetch({ data: { query: query }});
		
		this.$el.html('');
		this.breadcrumb.html('');
		console.log(products);
		
		// no results
		if(products.results.length == 0) {
			this.$el.html('<p class="">Nenhum resultado encontrado para sua pesquisa - <b>' + query + '</b></p>');
			return;
		}

		// showing products
		for(let i in products.results) {
			// format price
			products.results[i].formated_price = (products.results[i].price).formatMoney(0, '', '.');
			products.results[i].url_title      = products.results[i].title.replace(/[-,%, ]/g, '_');
			
			this.$el.append(this.template(products.results[i]));
			
			if(+i + 1 < products.results.length)
				this.$el.append('<hr>');
		}

		// showing category breadcrumb
		for(let i = 0; i < categoryLimit; i++) {
			// add the category breadcrumb
			this.breadcrumb.append(products.results[i].title.split(' ')[0]);

			if(i != categoryLimit - 1)
				this.breadcrumb.append('<span class="breadcrumb-space">></span>');
		}
	}
});