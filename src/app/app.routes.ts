import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./core/layout/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'denuncias',
        loadComponent: () =>
          import('./features/denuncias/denuncias.component').then((m) => m.DenunciasComponent),
      },
      {
        path: 'casos',
        loadComponent: () =>
          import('./features/casos/casos.component').then((m) => m.CasosComponent),
      },
      {
        path: 'victimas',
        loadComponent: () =>
          import('./features/victimas/victimas.component').then((m) => m.VictimasComponent),
      },
      {
        path: 'citas',
        loadComponent: () =>
          import('./features/citas/citas.component').then((m) => m.CitasComponent),
      },
      {
        path: 'evidencias',
        loadComponent: () =>
          import('./features/evidencias/evidencias.component').then((m) => m.EvidenciasComponent),
      },
      {
        path: 'reportes',
        loadComponent: () =>
          import('./features/reportes/reportes.component').then((m) => m.ReportesComponent),
      },
      {
        path: 'auditoria',
        loadComponent: () =>
          import('./features/auditoria/auditoria.component').then((m) => m.AuditoriaComponent),
      },
      {
        path: 'configuracion',
        loadComponent: () =>
          import('./features/configuracion/configuracion.component').then((m) => m.ConfiguracionComponent),
      },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];
