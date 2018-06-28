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

async function getUser(id = 0) {
	console.log(await ajax('http://devfluig.iv2.com.br/api/public/2.0/users/findById/' + id));
}

getAllUsers();