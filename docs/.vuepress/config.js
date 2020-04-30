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
        'Introduction',
        'Contents',
        'Chapter01',
        'Chapter02',
        'Chapter03',
        'Chapter04',
        'Chapter05',
        'Chapter06',
        'Chapter07',
        'Chapter08',
        'Chapter09',
        'Chapter10',
        'Chapter11',
        'Chapter12',
        'Chapter13',
        'Chapter14',
        'Chapter15',
        'Chapter16',
        'Chapter17',
        'Chapter18',
        'Chapter19',
        'Chapter20',
        'Chapter21',
        'Chapter22'
      ]
    },
    nav: [{ text: '目录', link: '/content/Preface' }]
  }
};
