import { defineConfig } from '@umijs/max';

export default defineConfig({
  request: {},
  fastRefresh: true,
  mfsu: {},
  antd: {},
  npmClient: 'pnpm',
  title: '大屏模板',
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
