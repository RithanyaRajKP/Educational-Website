import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"items",component:ItemsComponent},
  {path:"itemDetails",component:ItemDetailsComponent},
  {path:"myOrders",component:MyOrdersComponent},
  {path:"abc",component:AbcComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
