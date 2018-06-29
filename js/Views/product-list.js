MercadoLivreApp.Views.ProductListView = Backbone.View.extend({
	el: $('#resultList'),
	template: _.template($('#itemTemplate').html()),
	
	collection: new MercadoLivreApp.Collections.ProductList,
	
	initialize: function() {
		this.render();
		
		// form submitting event
		$('#formSearch').submit((e) => this.search(e.delegateTarget, this.collection));
	},
	
	render: function() {
		// let products = this.collection.toJSON();
		
		// for(let i in products) {
			// $(this.el).append(this.template(products[i]));
		// }
	},
	
	search: async function(form) {
		let query  = form.querySelector('input[name=query]').value;
		
		console.log(await this.collection.fetch({ data: { query: query }}));
	}
});