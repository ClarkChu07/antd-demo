import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '语雀',
  },
  routes: [
    {
      path: '/',
      redirect: '/demo1',
    },
    {
      name: 'Demo1',
      path: '/demo1',
      component: '@/pages/Demo1',
    },
    {
      name: 'Demo2',
      path: '/demo2',
      component: '@/pages/Demo2',
    },
    {
      name: 'Demo3',
      path: '/demo3',
      component: '@/pages/Demo3',
    },
  ],
  npmClient: 'pnpm',
});

