import Main from '@/components/views/Main/Main.vue';

export default [
    {
        path: '/',
        component: Main,
        meta: { requiresWallet: false, canOpenWithWallet: false },
    }
];
