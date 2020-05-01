module.exports = {
  base: process.env.GITHUB == 'github' ? '/grammar-club/' : '/',
  dest: process.env.GITHUB == 'github' ? 'docs/.vuepress/github' : 'docs/.vuepress/dist',
  title: '语法俱乐部',
  themeConfig: {
    repo: 'llwslc/grammar-club',
    displayAllHeaders: true,
    smoothScroll: true,
    sidebar: {
      '/content/': [
        ['Preface', '序'],
        'Introduction',
        'Contents',
        {
          title: '第一篇 初级句型--简单句',
          collapsable: false,
          children: [
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
            'Chapter11'
          ]
        },
        {
          title: '第二篇 中级句型--复句',
          collapsable: false,
          children: ['Chapter12', 'Chapter13', 'Chapter14', 'Chapter15']
        },
        {
          title: '第三篇 高级句型--简化从句',
          collapsable: false,
          sidebarDepth: 2,
          children: ['Chapter16', 'Chapter17', 'Chapter18', 'Chapter19', 'Chapter20', 'Chapter21', 'Chapter22']
        }
      ]
    },
    nav: [{ text: '目录', link: '/content/Preface' }]
  }
};
