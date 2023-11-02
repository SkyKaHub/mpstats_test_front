import Main from '@/components/views/Main.vue';

export default [
    {
        path: '/',
        component: Main,
        meta: { requiresWallet: false, canOpenWithWallet: false },
    }
];
