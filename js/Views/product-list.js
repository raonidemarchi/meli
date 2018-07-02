'use strict'
MercadoLivreApp.Views.ProductList = Backbone.View.extend({
	el: $('#result'),
	breadcrumb: $('#breadcrumb'),
	template: _.template($('#itemTemplate').html()),
	templateLoading: _.template($('#itemLoadingTemplate').html()),
	templateBreadcrumbLoading: _.template($('#breadcrumbLoadingTemplate').html()),
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
		
		// loading
		this.$el.html(
			this.templateLoading() + '<hr>' + this.templateLoading() + '<hr>' + this.templateLoading() + '<hr>' + this.templateLoading()
		);
		this.breadcrumb.html(this.templateBreadcrumbLoading());
		
		products = await this.collection.fetch({ data: { query: query }});

		console.log('products list', products);
		
		// no results
		if(products.results.length == 0) {
			this.$el.html('<p>Nenhum resultado encontrado para sua pesquisa - <b>' + query + '</b></p>');
			this.breadcrumb.html('');
			return;
		}

		// showing products
		this.$el.html('');
		
		for(let i in products.results) {
			// format price
			products.results[i].formated_price = (products.results[i].price).formatMoney(0, '', '.');
			products.results[i].url_title      = encodeURI(products.results[i].title.replace(/[-, ]/g, '_').replace(/\//g, '%2F'));
			
			this.$el.append(this.template(products.results[i]));
			
			if(+i + 1 < products.results.length)
				this.$el.append('<hr>');
		}

		// categories
		this.breadcrumb.html('');

		for(let i in products.filters) {
			for(let j in products.filters[i].values) {
				// add the category breadcrumb
				this.breadcrumb.append('<span>' + products.filters[i].values[j].name + '<span>');

				if(+j + 1 < products.filters[i].values.length)
					this.breadcrumb.append('<span class="breadcrumb-space">></span>');
			}

			if(+i + 1 < products.filters.length)
				this.breadcrumb.append('<span class="breadcrumb-space">></span>');
		}

		// SEO: change the meta from head
		if(query !== null && query !== '') {
			PAGE_TITLE.innerText = `${query.capitalize()} no Mercado Livre`;
			PAGE_DESC.content 	 = PAGE_TITLE.innerText;
			PAGE_IMG.content  	 = products.thumbnail;
			PAGE_URL.href	  	 = document.URL;
		}
	}
});