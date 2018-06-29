'use strict'
const END_POINT = 'https://api.mercadolibre.com';

document.getElementById('query').focus();

function ajax(url = '', method = 'GET') {
	return new Promise(resolve => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.onloadend = function() {
            resolve(JSON.parse(this.responseText));
        };

        xhr.send();
    });
}

async function search(form) {
	let query  = form.querySelector('input[name=query]').value;
	let result = await ajax(`${END_POINT}/sites/MLA/search?q=${query}&limit=4`);
	
	console.log(result);
}

async function getItem(id = '') {
	let result = await Promise.all([
		ajax(`${END_POINT}/items/${id}`),
		ajax(`${END_POINT}/items/${id}/description`)
	]);
	
	console.log(result);
}