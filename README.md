# Mercado Livre Search

> A simple search application using the Mercado Libre API's.

## Development

*Make sure to have [Git](http://git-scm.com/) and [Node](http://nodejs.org/) installed.*

1. Fork the repo and create a new branch —or just create a new branch if you have permissions.

2. Once you have your local copy, install its dependencies:

    ```sh
    $ npm install
    ```

3. Install [Gulp](https://gulpjs.com/) globally:

    ```sh
    $ npm install -g gulp
    ```

4. Install [nodemon](https://nodemon.io/) globally:

    ```sh
    $ npm install -g nodemon
    ```
    
5. Install [Sass](https://sass-lang.com/install) globally:

    ```sh
    $ npm install -g sass
    ```

6. Install [QUnit](https://qunitjs.com/) globally:

    ```sh
    $ npm install -g qunit
    ```

7. Run the `dev` script:

    ```sh
    $ npm run dev
    ```

    *This will start the express server on the local server: [http://localhost:8080](http://localhost:8080)*

## Production

1. To prepare the `dist` folder for production enviroment run:

    ```sh
    $ npm run prepublish
    ```

    *This will run unity tests, minify and organize `index-prod.html` and the `.js`, `.css`, `.jpg`, `.png` and `.woff` files into the `dist` folder.*

2. Run the application:

    ```sh
    $ npm start
    ```
    *This will start the express server on the local server: [http://localhost](http://localhost)*

## Tests

Use the following command to run the tests:

```sh
$ npm test
```

The tests will run in the terminal using QUnit.

## Live Demo

To access the live demo visit: https://raonidemarchi.github.io/meli/.


## Used API's

- https://api.mercadolibre.com/
- https://api.mercadolibre.com/sites/MLB/search?category
- https://api.mercadolibre.com/sites/MLB/search
- https://api.mercadolibre.com/items
