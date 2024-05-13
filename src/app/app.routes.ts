import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmplistComponent } from './emplist/emplist.component';
import { ProductServicesComponent } from './product.services/productservices.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {'path':'', 'title':'Home', component:HomeComponent}, 
    {'path':'about', 'title':'About Us', component:AboutComponent},
    {'path':'emplist', 'title':'Employee List', component:EmplistComponent},
    {'path':'productservices', 'title':'Product and Services', component:ProductServicesComponent},
    {'path':'pagenotfound', 'title':'Page Not Found', component:PagenotfoundComponent},
];
