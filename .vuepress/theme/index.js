const Auth = require('vuepress-auth0')

const redirectUri = (process.env.NODE_ENV === 'development') ?
  'http://localhost:8081/callback.html' :
  'https://paschdan.github.io/callback.html'

module.exports = {
  plugins: [
    [
      Auth, {
      domain: 'paschdan.eu.auth0.com',
      redirectUri,
      clientID: '2km27PGh1L3Ks3MZhU3z7vZPFv3l87gx',
    }],
    [
      '@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/',
          pagination: {
            perPagePosts: 2,
          },
        },
      ],
      frontmatters: [
        {
          id: 'tag',
          keys: ['tag', 'tags'],
          path: '/tag/',
          layout: 'Tag',
          frontmatter: { title: 'Tag' },
          itemlayout: 'Tag',
          pagination: {
            perPagePosts: 3,
          },
        },
      ],
    }],
  ],
}
