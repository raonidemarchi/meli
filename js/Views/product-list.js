MercadoLivreApp.Views.ProductListView = Backbone.View.extend({
	el: $('#resultList'),
	template: _.template($('#itemTemplate').html()),
	collection: new MercadoLivreApp.Collections.ProductList,
	
	initialize: function(options) {
		this.render(options === undefined ? {} : options);
	},
	
	render: function(options) {
		if(options.query !== undefined) {
			this.search(options.query);
			document.querySelector('input[name=query]').value = options.query;
		}
		
		// form submitting event: redirect to search
		$('#formSearch').submit((e) => window.location.hash = 'items?search=' + e.delegateTarget.querySelector('input[name=query]').value.trim());
	},
	
	search: async function(query = '') {
		let products = [];
		
		this.$el.html('Carregando...');
		
		products = await this.collection.fetch({ data: { query: query }});
		
		this.$el.html('');
		console.log(products);
		
		for(let i in products.results) {
			// format price
			products.results[i].price = (products.results[i].price).formatMoney(0, '', '.')
			
			this.$el.append(this.template(products.results[i]));
			
			if(+i + 1 < products.results.length)
				this.$el.append('<hr>');
		}
	}
});