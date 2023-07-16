import { Component, OnInit } from '@angular/core';
import { RateService } from 'src/app/service/rateService.service';
import { Rate } from 'src/app/model/rate.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list-component.component.html',
  styleUrls: ['./rate-list-component.component.css']
})
export class RateListComponent implements OnInit {
  rates: Rate[]=[];
  rate: Rate= new Rate();

  constructor(private rateService: RateService) { }

  ngOnInit() {
    this.getRequest();
  }

  getRequest() {
    this.rateService.getRequest().subscribe(
      response => {
        this.rates = response;
      },
      error => {
        console.error('Error occurred while fetching rates', error);
      }
    );
  }
  addRate(rate: Rate) {
    this.rateService.addRate(this.rate)
      .subscribe(
        (response: Rate) => {
          console.log('Rate saved successfully:', response);
          this.getRequest();
        },
        (error) => {
          console.error('Rate save error:', error);
        }
      );
  }
}
