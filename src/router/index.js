import { createRouter, createWebHistory } from 'vue-router';

import Lokasi from '../components/MyLokasi.vue';
import Cuaca from '../components/MyCuaca.vue';
import Stopwatch from '../components/MyStopwatch.vue';
import Game from '../components/MyGame.vue';

const routes = [
  { path: '/', component: Lokasi },
  { path: '/cuaca', component: Cuaca },
  { path: '/stopwatch', component: Stopwatch},
  { path: '/game', component: Game},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;