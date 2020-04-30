module.exports = {
  base: process.env.GITHUB == 'github' ? '/grammar-club/' : '/',
  dest: process.env.GITHUB == 'github' ? 'docs/.vuepress/github' : 'docs/.vuepress/dist',
  title: '语法俱乐部',
  themeConfig: {
    repo: 'llwslc/grammar-club',
    sidebar: {
      '/content/': ['']
    },
    nav: [{ text: '目录', link: '/content/' }]
  }
};
