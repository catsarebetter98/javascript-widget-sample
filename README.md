# javascript-widget-sample

### Using React and Django Backend

./node_modules/.bin/webpack --config webpack.config.js

./node_modules/.bin/webpack-dev-server --open

yarn add  webpack webpack-dev-server copy-webpack-plugin --save-dev

The most important part is the way you set up the entry point, index.js in this project and the webpack config.

The tricky part was the placement of the node modules and exclusively using a single package manager, in this case, yarn (not npm!!!)

The shape of the package.json and yarn.lock and webpack config is the trickiest part.

Inspired by this - https://blog.jenyay.com/building-javascript-widget/
