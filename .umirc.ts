import { defineConfig } from '@umijs/max';


export default defineConfig({
  request: {},
  fastRefresh: true,
  mfsu: {},
  antd: {},
  npmClient: 'pnpm',
  title: '大屏模板',
  define: {
    BREAKPOINT: 1280, // 在小于这个值的时候，采用移动端的布局
    ECHARTS_DEFAULT_HEIGHT: 324, // echarts默认的高度，在移动端布局的情况下有效
    ECHARTS_COUNT: 3, // 左右展示的echarts图表数量
    PADDING: 16, // 左右两边的padding
  },
  outputPath: 'build',
  hash: true,
  base: '/screen-template',
  publicPath: '/screen-template/',
  links: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
  ],
  routes: [
    { path: '/', redirect: '/homepage' },
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        {
          path: '/homepage',
          component: './homepage',
        },
      ],
    },
  ],
});
