# Mercado Livre

## Development

*Make sure to have [Git](http://git-scm.com/) and
[Node](http://nodejs.org/) installed.*

1. Fork the repo and create a new branch —or just create a new branch if you have permissions.

2. Once you have your local copy, install its dependencies:

    ```sh
    $ npm install
    ```

3. Install [Gulp](https://gulpjs.com/):

    ```sh
    $ npm install gulp -g
    ```

4. Install [Nodemo](https://nodemon.io/):

    ```sh
    $ npm install nodemon -g
    ```

3. Run the `dev` script:

    ```sh
    $ npm run dev
    ```

This will start the express server on the local server: localhost:8080

## Production

To prepare the dist directory, for production enviroment, run:

```sh
$ npm run prepublish
```

This will minify and organize index.html and the js, css, images and font files into the "dist" folder

## Tests

Use the following command to run the tests:

```sh
$ npm test
```

The tests will run in the terminal using QUnit.

## Live Demo

To access the app, visit: https://raonidemarchi.github.io/meli/.
