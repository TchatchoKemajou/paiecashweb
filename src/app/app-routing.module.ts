import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';
import { CommerciauxComponent } from './commerciaux/commerciaux.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormcommerciauxComponent } from './formcommerciaux/formcommerciaux.component';
import { AuthguardGuard } from './Guards/authguard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RevendeursComponent } from './revendeurs/revendeurs.component';

const routes: Routes = [
 // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthguardGuard] },
  { path: 'formcom', component: FormcommerciauxComponent, canActivate: [AuthguardGuard] },
  { path: 'clients', component: DashboardComponent, canActivate: [AuthguardGuard] },
  { path: 'notfound', component: NotfoundComponent, canActivate: [AuthguardGuard] },
  { path: 'clients/:id', component: ClientdetailsComponent, canActivate: [AuthguardGuard] },
  { path: 'revendeurs', component: RevendeursComponent, canActivate: [AuthguardGuard] },
  { path: 'commerciaux', component: CommerciauxComponent, canActivate: [AuthguardGuard] },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
