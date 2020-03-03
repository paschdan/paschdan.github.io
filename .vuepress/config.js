module.exports = {
  title: "paschdans homepage", // replace with site title
  description: "my homepage", // replace with site description
  dest: "./dist",
  themeConfig: {
    nav: [
      {text: 'Hausplanung', link: '/house', meta: { auth: true}}
    ]
  }
}
