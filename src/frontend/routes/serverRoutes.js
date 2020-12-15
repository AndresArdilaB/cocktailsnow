import Home from '../containers/Home';
import Results from '../containers/Results';
import Cocktail from '../containers/Cocktail';
import NotFound from '../containers/NotFound';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  }, {
    exact: true,
    path: '/results/:param/:value',
    component: Results,
  }, {
    exact: true,
    path: '/cocktail/:id',
    component: Cocktail,
  }, {
    exact: true,
    path: 'NotFound',
    component: NotFound,
  },
];

export default routes;
