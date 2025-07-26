import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';

export const routes: Routes = [
{path:'' , redirectTo:'home', pathMatch:'full'},
{path:'home',component:HomeComponent  , title:'home'},

{path:'productdetail/:id',component:ProductdetailComponent,title:'productdetail'},
{path:'**',component:NotfoundComponent ,title:'notfound'},



];
