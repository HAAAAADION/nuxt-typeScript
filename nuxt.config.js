module.exports = {
    srcDir: 'src',
    /*
    ** Headers of the page
    */
    head: {
        title: '24haowan-proxy-admin',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '//static.cdn.24haowan.com/24haowan/24-dev/element-ui-2.3.6/index.css' },
            { rel: 'stylesheet', href: '//at.alicdn.com/t/font_301286_65e5assnbap833di.css' }
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    vendor: [
        'axios'
    ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        // extend (config, { isDev, isClient }) {
        //   if (isDev && isClient) {
        //     config.module.rules.push({
        //       enforce: 'pre',
        //       test: /\.(js|vue)$/,
        //       loader: 'eslint-loader',
        //       exclude: /(node_modules)/
        //     })
        //   }
        // }
        extend (config) {
            for (rule of config.module.rules) {
                if (rule.loader === 'vue-loader') {
                    rule.options.loaders.ts = 'ts-loader?{"appendTsSuffixTo":["\\\\.vue$"]}'
                }
            }
        }
    }
}
