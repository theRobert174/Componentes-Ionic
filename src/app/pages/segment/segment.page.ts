import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  constructor(private dataService : DataService) { }

  superHeroes: Observable<any>;
  segmentVal: string;

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event){
    console.log(event.detail.value);
    if(event.detail.value === 'todos'){
      this.segmentVal = '';
    }
    else{
      this.segmentVal = event.detail.value;
    }
    
  }

}
