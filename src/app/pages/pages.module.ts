import { NgModule } from '@angular/core';
import { PAGESROUTES } from './pages.router';

import { PagesComponent } from './pages.component';
import { ShareModule } from '../share/share.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

@NgModule({
    declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
    ],
    exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
    ],
    imports:[
        ShareModule,
        PAGESROUTES
    ]

})

export class PagesModule { }