import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [
      {
        path: 'fotos',
        loadComponent: () =>
          import('./pages/fotos/fotos.page').then((m) => m.FotosPage),
      },
      {
        path: 'tienda',
        loadComponent: () =>
          import('./pages/tienda/tienda.page').then((m) => m.TiendaPage),
      },
      {
        path: 'carrito',
        loadComponent: () =>
          import('./pages/carrito/carrito.page').then((m) => m.CarritoPage),
      },
      {
        path: '',
        redirectTo: 'fotos', // 👈 puedes dejarlo relativo en lugar de /home/fotos
        pathMatch: 'full',
      },
    ],
  },
];
