import { Component, OnInit, ViewChild } from '@angular/core';
//import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman','Superman','Batman','Mujer Maravilla',"Flash"];
  //@ViewChild(IonReorderGroup) ionReorderGroup : IonReorderGroup;
  toggle: boolean = true;


  constructor() { }

  ngOnInit() {
  }

  doReorder(event : any){
    console.log(event);
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];

    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
    console.log(this.personajes);
  }

  /*onClick(){
    if(this.toggle){
      this.ionReorderGroup.disabled = true;
      this.toggle = !this.toggle;
    }else{
      this.ionReorderGroup.disabled = false;
      this.toggle = !this.toggle;
    }
    
  }*/

}
