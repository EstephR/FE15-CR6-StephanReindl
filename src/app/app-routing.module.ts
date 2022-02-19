import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:"", component: HomePageComponent
  },
  {path:"about", component: AboutUsComponent
  },
  {path:"menu", component: MenuComponent
  },
  {path:"products/:productId", component: MenuDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
