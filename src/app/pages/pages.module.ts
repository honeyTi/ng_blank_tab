import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages.routing';

import { PagesComponent } from './pages.component';
import { LoginModule } from './login/login.module';

@NgModule({
        imports: [
                PagesRoutingModule,
                LoginModule,
        ],
        declarations: [
                PagesComponent,
        ],
        providers: [],
})
export class PagesModule { }
