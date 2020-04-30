module.exports = {
  base: process.env.GITHUB == 'github' ? '/grammar-club/' : '/',
  dest: process.env.GITHUB == 'github' ? 'docs/.vuepress/github' : 'docs/.vuepress/dist',
  title: '语法俱乐部',
  themeConfig: {
    repo: 'llwslc/grammar-club',
    displayAllHeaders: true,
    sidebar: 'auto',
    sidebar: {
      '/content/': [
        ['Preface', '序'],
        ['Introduction', '前言'],
        ['Contents', '目录'],
        ['Chapter01', '第一章'],
        ['Chapter02', '第二章']
      ]
    },
    nav: [{ text: '目录', link: '/content/Preface' }]
  }
};
