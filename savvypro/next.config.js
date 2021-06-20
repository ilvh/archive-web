const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
const withOptimizedImages = require("next-optimized-images");
const withTypeScript = require("@zeit/next-typescript");
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}
let purge;

// next.config.js
module.exports = {
  // distDir: "../.next",
  ...withTypeScript(
    withCss(
      withOptimizedImages({
        optimizeImages: true,
        optimizeImagesInDev: true,
        mozjpeg: {
          quality: 70
        },
        webpack(config, { isServer }) {
          // config.module.rules.push({
          //   test: /\.svg$/,
          //   use: ["@svgr/webpack"]
          // });
          if (isServer) {
            const antStyles = /antd\/.*?\/style\/css.*?/
            const origExternals = [...config.externals]
            config.externals = [
              (context, request, callback) => {
                if (request.match(antStyles)) return callback()
                if (typeof origExternals[0] === 'function') {
                  origExternals[0](context, request, callback)
                } else {
                  callback()
                }
              },
              ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ]

            config.module.rules.unshift({
              test: antStyles,
              use: 'null-loader',
            })
          }
          return config;
        }
      })
    )
  )
};
