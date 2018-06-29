function ajax(url = '', method = 'GET') {
	return new Promise(resolve => {
        let r = new XMLHttpRequest();

        r.open(method, url, true);
        r.onloadend = function() {
            resolve(this.responseText);
        };

        r.send();
    });
}

async function getAllUsers() {
	console.log(await ajax('https://api.mercadolibre.com/sites/'));
}

getAllUsers();