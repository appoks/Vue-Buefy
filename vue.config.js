// vue.config.js

 const path = require('path');

 module.exports = {
   css: {
     loaderOptions: {
       sass: {
         sassOptions: {
           indentedSyntax: false,
            },
            prependData: '@import "~@/assets/app.scss";',
       },
     },
   },
   assetsDir: '@/assets/',
 }