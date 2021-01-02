module.exports = {
    transpileDependencies: ["vuetify"],
    chainWebpack: config => {
        // config.module.rules.delete('eslint')
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        './' : '/'
};