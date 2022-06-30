import { defineConfig } from '@umijs/max';

export default defineConfig({
  request: {},
  fastRefresh: true,
  mfsu: {},
  npmClient: 'pnpm',
  routes: [
    {
      path: '/',
      component: './homepage',
      exact: true,
    },
  ],
});
