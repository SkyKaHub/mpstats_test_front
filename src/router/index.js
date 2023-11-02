import routes from './routes';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    trailingSlash: true,
    routes,
});

export default router;
