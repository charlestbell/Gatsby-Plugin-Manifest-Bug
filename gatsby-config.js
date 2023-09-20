/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "My Site",
        short_name: "My Site",
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#10384F`,
        display: `browser`,
        icons: [
          {
            src: "src/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "src/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "src/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "src/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "src/icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "src/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "src/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "src/icons/icon-512x512_maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    },
  ],
};
