import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from './restaurants.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  constructor(private restaurants: RestaurantService) { }

  restaurant: Restaurant[]


  ngOnInit() {
     this.restaurants.restaurants()
        .subscribe(meat => this.restaurant = meat);
  }

}
