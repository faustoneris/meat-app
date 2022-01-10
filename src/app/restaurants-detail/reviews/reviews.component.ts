import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { RestaurantService } from 'app/restaurants/restaurant.service';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  constructor(private restaurantService: RestaurantService, 
              private route: ActivatedRoute ) { }

  reviews: Observable<any>

  ngOnInit() {
    this.reviews = this.restaurantService
      .reviewsByRestaurant(this.route.parent.snapshot.params['id'])
  }

}
