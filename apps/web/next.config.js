const withTM = require('next-transpile-modules');
const withCSS = require('@zeit/next-css');
const path = require('path');
const webpack = require('webpack');

const alias = require('./alias');

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: isProduction ? '[hash:base64:5]' : '[local]___[hash:base64:5]',
    },
    webpack(config) {
        Object.keys(alias).map(
            key => config.resolve.alias[key] = path.join(__dirname, alias[key])
        );

        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: '[name].[ext]',
                },
            },
        });

        return config;
    }
};

module.exports = withTM(['@qrt/atoms', '@qrt/molecules', '@qrt/organisms'])(withCSS(nextConfig));
