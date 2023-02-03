import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'type-challenges',
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '最后更新',
    sidebar: getSidebar(),
  },
});

function getSidebar() {
  return [
    {
      text: '简单',
      collapsible: true,
      items: [
        { text: '4 - 实现 Pick', link: '/简单/pick', },
      ],
    },
    {
      text: '中等',
      items: [
        { text: '2 - 获取函数返回值', link: '/中等/return' },
      ],
    },
  ];
}
