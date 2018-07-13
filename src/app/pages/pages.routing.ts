import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
        {
                path: '',
                component: PagesComponent,
                children: [
                        {
                                path: 'login',
                                component: LoginComponent,
                        },
                        { path: '', redirectTo: 'login', pathMatch: 'full' },
                ]
        }
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
})
export class PagesRoutingModule {
}
