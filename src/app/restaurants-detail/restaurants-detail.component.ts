import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurants.model';

@Component({
  selector: 'mt-restaurants-detail',
  templateUrl: './restaurants-detail.component.html'
})
export class RestaurantsDetailComponent implements OnInit {

  constructor(private restauranteService: RestaurantService, 
              private route: ActivatedRoute) { }

  restaurant: Restaurant

  ngOnInit() {
    this.restauranteService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(meat => this.restaurant = meat); 
  }

}
