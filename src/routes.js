/* eslint-disable import/prefer-default-export */
import EventAdd from '@/components/EventAdd.vue';
import EventList from '@/components/EventList.vue';
import EventDetails from '@/components/EventDetails.vue';

export const routes = [
  {
    path: '/',
    component: EventList,
    name: 'home',
  },
  {
    path: '/add',
    component: EventAdd,
  },
  {
    path: '/details/:id',
    component: EventDetails,
    name: 'details',
  },
  {
    path: '*',
    component: EventList,
  },
];
