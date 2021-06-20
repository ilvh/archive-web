const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
  plugins: [
    tailwindcss("../tailwind.config.js"),
    ...(process.env.NODE_ENV === `production`
      ? [
          require("@fullhuman/postcss-purgecss")({
            whitelist: ["html", "body"],
            whitelistPatterns: [/^alice-carousel/, /modal-video/, /^progress/, /^ant/],
            whitelistPatternsChildren: [
              /alice-carousel/,
              /modal-video/,
              /md:ml-[1-3]\/12/,
              /lg:ml-[1-3]\/7/,
              /progress/,
              /ant/
            ],
            content: [
              // "../**/*.js"
              "./components/**/*.{js,tsx,ts}",
              "./screens/**/*.{js,tsx,ts}",
              "./pages/**/*.{js,tsx,ts}",

              "./pages/**/*.css",
              "./components/**/*.css",
              "./screens/**/*.css"
            ],
            defaultExtractor: content =>
              content.match(/[A-Za-z0-9-_\.:\/]+/g) || []
          }),
          require("autoprefixer"),
          require("cssnano")
        ]
      : [])
  ]
};
