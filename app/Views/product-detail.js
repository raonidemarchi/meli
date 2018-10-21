'use strict'
MercadoLivreApp.Views.ProductDetail = Backbone.View.extend({
	el: $('#result'),
	breadcrumb: $('#breadcrumb'),
	template: _.template($('#itemDetailTemplate').html()),
	templateLoading: _.template($('#itemDetailLoadingTemplate').html()),
	templateError: _.template($('#itemDetailErrorTemplate').html()),
	templateBreadcrumbLoading: _.template($('#breadcrumbLoadingTemplate').html()),
	templateLoadingError: _.template($('#loadingErrorTemplate').html()),
	collection: new MercadoLivreApp.Collections.ProductDetail,
	collectionDescription: new MercadoLivreApp.Collections.ProductDescription,
	collectionCategory: new MercadoLivreApp.Collections.ProductCategory,
	
	initialize: function(options) {
		this.render(options === undefined ? {} : options);
	},
	
	render: function(options) {
		// roll the page to the top
		$('html, body').scrollTop(0);

		if(options.id !== undefined)
			this.getItem(options.id);
	},
	
	getItem: async function(id = '') {
		let results  = [];
		let product	 = {};
		let category = {};
		
		// loading
		this.$el.html(this.templateLoading());
		this.breadcrumb.html(this.templateBreadcrumbLoading());
		
		// API's reponse
		results = await Promise.all([
			this.collection.fetch({ data: { id: id }}),
			this.collectionDescription.fetch({ data: { id: id }})
		]);

		// product not found
		if(results[0].status === 404) {
			this.$el.html(this.templateError());
			this.breadcrumb.html('');
			return;
		}

		// connection error
		if(results[0].status !== 200 || results[1].status !== 200) {
			this.$el.html(this.templateLoadingError({ currentURL: window.location.href }));
			this.breadcrumb.html('');
			return;
		}
		
		// Merge objects. New method for EcmaScript 2018: product = { ...results[0], ...results[1] } (Today, only supported by Chrome and Firefox);
		product = Object.assign({}, JSON.parse(results[0].responseText), JSON.parse(results[1].responseText));
		
		console.log('product details and description', product);
		
		product.formated_price = (product.price).formatMoney(0, '', '.');
		product.condition_text = product.condition === 'new' ? 'Novo' : 'Usado';
		product.description    = product.plain_text.replace(/(?:\r\n|\r|\n)/g, '<br>');
		
		this.$el.html(this.template(product));

		// SEO: change the meta from head
		PAGE_TITLE.innerText = `${product.title} por $ ${product.formated_price} no Mercado Livre`;
		PAGE_DESC.content 	 = PAGE_TITLE.innerText;
		PAGE_IMG.content  	 = product.pictures[0].url;
		PAGE_URL.href	  	 = document.URL;
		
		// get the categories descriptions
		category = await this.collectionCategory.fetch({ data: { category_id: product.category_id }});
		
		this.breadcrumb.html('');
		
		console.log('categories', category);

		// create the template
		for(let i in category.filters) {
			for(let j in category.filters[i].values) {
				// add the category breadcrumb
				this.breadcrumb.append('<span>' + category.filters[i].values[j].name + '<span>');

				if(+j + 1 < category.filters[i].values.length)
					this.breadcrumb.append('<span class="breadcrumb-space">></span>');
			}

			if(+i + 1 < category.filters.length)
				this.breadcrumb.append('<span class="breadcrumb-space">></span>');
		}

		// show the categories
		this.breadcrumb.html();
	}
});