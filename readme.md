# A 'simple' starting point for TailWind.

`npm i` then:

```
npm run build
    Runs css:build and js:build in a production env

npm run css:dev
    Pushes app.css though postcss

npm run css:build
    Compiles app.css through postcss, autoprefixes, purges and minifys

npm run js:dev
    Pushes app.js through babel

npm run js:build
    Compiles app.js to usable JS and minifys

npm run watch
    Runs the 2 dev jobs for changes

npm run serve
    Runs reloader and the watch task