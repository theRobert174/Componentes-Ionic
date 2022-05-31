import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes : any[] = [];
  textoBuscar: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe(albums => {
      console.log(albums);
      this.albumes = albums;
    })
  }

  onSearchChange(event){
    console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
