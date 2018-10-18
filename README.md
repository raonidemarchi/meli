# Mercado Livre

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

5. Install [QUnit](https://qunitjs.com/) globally:

    ```sh
    $ npm install -g qunit
    ```

6. Run the `dev` script:

    ```sh
    $ npm run dev
    ```

    *This will start the express server on the local server: [http://localhost:8080](http://localhost:8080)*

## Production

To prepare the dist directory for production enviroment run:

```sh
$ npm run prepublish
```

This will minify and organize index-prod.html and the `.js`, `.css`, `.jpg`, `.png` and `.woff` files into the `dist` folder.

## Tests

Use the following command to run the tests:

```sh
$ npm test
```

The tests will run in the terminal using QUnit.

## Live Demo

To access the live demo visit: https://raonidemarchi.github.io/meli/.
