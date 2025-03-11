import { Routes } from '@angular/router';
import { ComponentTreeComponent } from './home/component-tree/component-tree.component';
import { DefaultComponent } from './home/default/default.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'default',
        component: DefaultComponent
    },
    {
        path: 'component-tree',
        component: ComponentTreeComponent
    }
];
