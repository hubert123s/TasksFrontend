import { Component, OnInit } from '@angular/core';
import { RateService } from 'src/app/service/rateService.service';
import { RateOutputDto } from 'src/app/model/rate-output-dto.model';
import { RateSelected } from 'src/app/model/rate-selected.model';
import { FormsModule } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list-component.component.html',
  styleUrls: ['./rate-list-component.component.css']
})
export class RateListComponent implements OnInit {
rates: RateOutputDto[] = [];
pageSizeOptions: number[] = [2, 4, 6, 8];
pageSize = this.pageSizeOptions[0];
pageIndex = 0;
totalItems = 0;

  rate: RateOutputDto= new RateOutputDto();
 rateSelected: RateSelected= new RateSelected();
  constructor(private rateService: RateService) { }

  ngOnInit() {
    this.getRequest();
  }

  getRequest() {
    this.rateService.getRequest(this.pageIndex,this.pageSize).subscribe(
      response => {
        this.rates = response;
      },
      error => {
        console.error('Error occurred while fetching rates', error);
      }
    );
  }
  addRate(rate: RateOutputDto) {
    this.rateService.addRate(this.rate)
      .subscribe(
        (response: RateOutputDto) => {
          console.log('Rate saved successfully:', response);
          this.getRequest();
          this.rateSelected = response;
        },
        (error) => {
          console.error('Rate save error:', error);
        }
      );
  }
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getRequest();
  }
}
