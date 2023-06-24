import { createRouter, createWebHistory } from 'vue-router';

import InicioPage from '../pages/IndexPage.vue';
import PersonajesPage from '../pages/CharactersPage.vue';
import PeliculasPage from '../pages/PeliculasPage.vue';
import SeriesPage from '../pages/SeriesPage.vue';
import ComicsPage from '../pages/ComicsPage.vue';

const routes = [
    {
      path: '/',
      component: InicioPage,
      meta: { title: 'Inicio' },
    },
    {
      path: '/personajes',
      component: PersonajesPage,
      meta: { title: 'Personajes' },
    },
    {
      path: '/peliculas',
      component: PeliculasPage,
      meta: { title: 'Películas' },
    },
    {
      path: '/series',
      component: SeriesPage,
      meta: { title: 'Series' },
    },
    {
      path: '/comics',
      component: ComicsPage,
      meta: { title: 'Cómics' },
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;