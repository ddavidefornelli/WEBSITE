import { pageview } from '@vercel/analytics';

const normalizePath = (path) => {
  if (path.length > 1 && path.endsWith('/')) {
    return path.replace(/\/+$/, '');
  }

  return path;
};

const Home = () => '<custom-body></custom-body>';
const Projects = () => '<projects-projects></projects-projects>';
const NotFound = () => `
  <section class="panel">
    <h2>404</h2>
    <p>PAGINA NON TROVATA.</p>
    <a class="site-link" href="/" data-link>TORNA ALLA HOME</a>
  </section>
`;

const router = async () => {
  const routes = [
    { path: '/', view: Home },
    { path: '/projects', view: Projects },
  ];
  const currentPath = normalizePath(window.location.pathname);

  const potentialMatches = routes.map((route) => {
    const obj = {
      route,
      isMatch: currentPath === route.path,
    };
    return obj;
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: { path: currentPath, view: NotFound },
      isMatch: true,
    };
  }

  document.querySelector('#app').innerHTML = match.route.view();
  pageview({ path: currentPath });
  window.dispatchEvent(new CustomEvent('routechange', {
    detail: { path: match.route.path },
  }));
};

const navigateTo = (url) => {
  const nextUrl = new URL(url, window.location.origin);
  const nextPath = normalizePath(nextUrl.pathname);
  const currentUrl = `${normalizePath(window.location.pathname)}${window.location.search}${window.location.hash}`;
  const destinationUrl = `${nextPath}${nextUrl.search}${nextUrl.hash}`;

  if (destinationUrl === currentUrl) {
    return;
  }

  window.history.pushState(null, '', destinationUrl);
  router();
  window.scrollTo(0, 0);
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('[data-link]');

    if (
      link
      && e.button === 0
      && !e.metaKey
      && !e.ctrlKey
      && !e.shiftKey
      && !e.altKey
      && link.target !== '_blank'
    ) {
      e.preventDefault();
      navigateTo(link.href);
    }
  });

  router();
});
