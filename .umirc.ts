import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/homepage/index' }],
  fastRefresh: {},
  mfsu: {},
  // links: [
  //   {
  //     href: 'https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css',
  //     rel: 'stylesheet',
  //   },
  // ],
});
