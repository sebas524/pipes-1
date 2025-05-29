import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic Pipes',
    loadComponent: () => {
      return import('./pages/basic-page/basic-page.component').then((m) => {
        return m.BasicPageComponent;
      });
    },
  },
  {
    path: 'numbers',
    title: 'Numbers Pipe',
    loadComponent: () => {
      return import('./pages/numbers-page/numbers-page.component').then((m) => {
        return m.NumbersPageComponent;
      });
    },
  },
  {
    path: 'uncommon',
    title: 'Uncommon Pipes',
    loadComponent: () => {
      return import('./pages/uncommon-page/uncommon-page.component').then(
        (m) => {
          return m.UncommonPageComponent;
        }
      );
    },
  },
  {
    path: 'custom',
    title: 'Custom Pipes',
    loadComponent: () => {
      return import('./pages/custom-page/custom-page.component').then((m) => {
        return m.CustomPageComponent;
      });
    },
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
