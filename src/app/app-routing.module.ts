import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { MyCartDetailsComponent } from './my-cart-details/my-cart-details.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'my-cart-details', component: MyCartDetailsComponent, canActivate: [AuthGuard] }, // guarded
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] }, // guarded
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: 'home' }, // wildcard route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
