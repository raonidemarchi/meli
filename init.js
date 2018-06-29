'use strict'

function ajax(url = '', method = 'GET') {
	return new Promise(resolve => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.onloadend = function() {
            resolve(this.responseText);
        };

        xhr.send();
    });
}

async function searchItens(form) {
	let query  = form.querySelector('input[name=query]').value;
	let action = form.action;
	let result = JSON.parse(await ajax(`${action}?q=${query}&limit=4`));
	
	console.log(result);
}