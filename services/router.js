const Home = () => '<custom-body></custom-body>';
const Projects = () => 'PROGETTI';
const NotFound = () => '<h1>404</h1><p>Pagina non trovata.</p><a href="/" data-link>Torna alla Home</a>';

const router = async () => {
  const routes = [
    { path: '/', view: Home },
    { path: '/projects', view: Projects },
  ];

  const potentialMatches = routes.map((route) => {
    const obj = {
      route,
      isMatch: window.location.pathname === route.path,
    };
    return obj;
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: { path: window.location.pathname, view: NotFound },
      isMatch: true,
    };
  }

  document.querySelector('#app').innerHTML = match.route.view();
};

const navigateTo = (url) => {
  window.history.pushState(null, null, url);
  router();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
