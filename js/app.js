'use strict'

// form submitting event: redirect to search
$('#formSearch').submit(e => {
    let input = e.delegateTarget.querySelector('input[name=query]');
    let query = input.value.trim();

    input.blur();

    // cancel if the search is empty
    if(query === '')
        return;

    window.location.hash = 'items?search=' + encodeURI(query).replace(/\//g, '%2F');
});

$(function() { 
    MercadoLivreApp.Router.Instance = new MercadoLivreApp.Router();
    Backbone.history.start();

    // focus on the search input
    if(document.querySelector('#formSearch input').value == '')
       document.querySelector('#formSearch input').focus();
});