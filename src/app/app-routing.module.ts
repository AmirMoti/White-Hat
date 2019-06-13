import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductTableComponent } from './product-table/product-table.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'wh', component: ProductTableComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
