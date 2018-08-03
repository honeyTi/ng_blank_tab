import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages.routing';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { LoginModule } from './login/login.module';
import { RouterGuardService } from '../guard/routerGuardService';

@NgModule({
        imports: [
                CommonModule,
                PagesRoutingModule,
                LoginModule,
        ],
        declarations: [
                PagesComponent,
        ],
        providers: [
                RouterGuardService,
        ],
})
export class PagesModule { }
