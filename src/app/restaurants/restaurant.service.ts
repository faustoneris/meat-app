import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

import { MEAT_API } from "app/app.api";
import { Restaurant } from "./restaurant/restaurants.model";
import { ErrorHandler } from "app/app.error";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable( )
export class RestaurantService { 
    constructor(private http: Http) {} 

    restaurants(): Observable<Restaurant[]> {         
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError); 
    }

    restaurantById(id: string): Observable<Restaurant> { 
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError); 
    }

    reviewsByRestaurant(id: string): Observable<any> { 
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError); 
    }
}