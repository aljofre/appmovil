import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tus componentes importados
import { LoginComponent } from './login/login.component';
import { HomePage } from './home/home.page';
import { AccessPage } from './access/access.page';
import { N404Component } from './n404/n404.component'; // Asegúrate de importar el componente 404

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomePage },
    { path: 'access', component: AccessPage },
    // ... (otras rutas que puedas tener)
    { path: '404', component: N404Component },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
