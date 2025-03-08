import { Routes } from '@angular/router';
import { DefaultComponent } from './home/default/default.component';
import { HomeComponent } from './home/home.component';
import { ZonePollution1Component } from './home/zone-pollution1/zone-pollution1.component';

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
        path: 'zone-pollution1',
        component: ZonePollution1Component
    }
];
