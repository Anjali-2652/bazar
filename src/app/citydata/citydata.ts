import { Component, OnInit } from '@angular/core';
import { City } from '../services/city';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-citydata',
  standalone: true,
  imports: [DecimalPipe, CommonModule, FormsModule],
  templateUrl: './citydata.html',
  styleUrl: './citydata.css',
})
export class Citydata  implements OnInit{
  cityName: string = '';
  cityInfo: any[] = [];
  loading : boolean = false;
  error: string= '';

  constructor(private cityService: City){}
  ngOnInit(): void {
    this.loadDefaultCities();
  }


  //fetch a list of cities
  loadDefaultCities(): void{
    this.loading = true;
    this.error = '';

    const defaultCityNames = ['Janakpur', 'Kathmandu', 'New York','San Francisco ', 'Biratnagar', 'London', 'New Delhi',  ];
    
    //create an array of http request for each default city
    const requests = defaultCityNames.map(name=>this.cityService.getCityData(name));


    //fork join runs all requests at the same time and waits for all to finish
    forkJoin(requests).subscribe({
      next: (responses: any[])=>{

        //flat combines array into a single list
        this.cityInfo = responses.flat();
        this.loading = false;
      },
      error: (err)=>{
        this.error = 'Failed to load default cities';
        this.loading = false;
        console.error(err);
      }
    
    });
  }

  fetchCityInfo(): void{
    if(!this.cityName.trim()) return;

    this.loading = true;
    this.error = '';

    this.cityService.getCityData(this.cityName).subscribe({
      next: (info)=>{
        this.cityInfo = info ;
        this.loading = false;
      },
      error:(err) =>{
        this.error = 'Failed to fetch city data..'
        this.loading = false;
        console.error(err);
      }
    })
  }
}
