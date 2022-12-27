import { defineConfig } from '@umijs/max';

export default defineConfig({
  request: {},
  fastRefresh: true,
  mfsu: {},
  antd: {},
  npmClient: 'pnpm',
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
