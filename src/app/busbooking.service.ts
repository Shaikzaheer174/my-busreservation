import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusbookingService {

  constructor(private myhttp:HttpClient) { }

  restUrl:string="http://localhost:9090/rest/api";
  newUrl:string="http://localhost:9090/rest/api";
  bookUrl:string="http://localhost:9090/rest/api";


  // restUrl:string="http://localhost:9096/rest/api";
  // newUrl:string="http://localhost:9096/new/api";
  // bookUrl:string="http://localhost:9094/book/api"

  getBuses()
  {
      return this.myhttp.get(this.restUrl+"/busdetails")
  }
   getBusseats(bid:string){
     return this.myhttp.get(this.newUrl+"/busseats/"+bid)
   }
   getBusDetails(bid:string)
  {
      return this.myhttp.get(this.restUrl+"/busdetails/"+bid)
  }
  addCustomer(book:any){
    return this.myhttp.get(this.restUrl+"/busdetails/")
  }
  getBusSearchDetails(fcity:string,tcity:string,date:string){
    return this.myhttp.get(this.restUrl+"/busdetails/"+fcity+"/"+tcity+"/"+date)
  }

  getBookingdetails(){
    return this.myhttp.get(this.bookUrl+"/abus")
  }
}