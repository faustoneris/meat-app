
import { Routes } from '@angular/router';


import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import { RestaurantsComponent } from './restaurants/restaurant/restaurants.component';

export const routes: Routes = [
    {path: '', component: HomeComponent}, 
    {path: 'about', component: AboutComponent}, 
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantsDetailComponent, 
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent}, 
            {path: 'reviews', component: ReviewsComponent}
        ]}
    
]; 