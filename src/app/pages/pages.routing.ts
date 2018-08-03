import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RouterGuardService } from '../guard/routerGuardService'

const routes: Routes = [
        {
                path: '',
                component: PagesComponent,
                children: [
                        {
                                path: 'login',
                                component: LoginComponent,
                                canActivate: [RouterGuardService],
                        },
                        {
                                path: '',
                                redirectTo: 'login',
                                pathMatch: 'full',
                                canActivate: [RouterGuardService],
                        },
                ]
        }
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
})
export class PagesRoutingModule {
}
