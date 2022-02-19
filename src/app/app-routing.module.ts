import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';


const routes: Routes = [
  {path:"", component: HomePageComponent
  },
  {path:"about", component: AboutUsComponent
  },
  {path:"menu", component: MenuComponent
  },
  {path:"cart", component: CartComponent
  },
  {path:"menu/:productId", component: MenuDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
