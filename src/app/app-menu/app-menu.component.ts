import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {
  type: any; //por cima ou mesmo nivel

  @Input() menuObject: any;

  constructor() { }

  ngOnInit() {
    this.type = "above";
  }

  logaPeloMenu(){
    console.log(this.menuObject);
  }

  togglaItem(item: any){
    console.log(item);
    if (item.hasChildren){

      //maquina de estados
      switch (item.state){

        case 0:
          item.state++;
          item.state++;
          item.state++;
          break;

        case 3:
          item.state++;
          item.state++;
          item.state=0;
          break;

      }

    }
  }

  mouseOverHandle(menu: any){

    if (menu.state == 0) {
      menu.state++;
      setTimeout(() => {
        menu.state++;
        setTimeout(() => {
          menu.state++;
        }, 300);
      }, 300);

    }
  }

  mouseLeaveHandle(menu: any){

    for (let item of menu.data){
      item.state=3;
      if(item.hasChildren){
        console.log(item);
        //fecha o item aberto
        item.state++;
        item.state++;
        item.state=0;
      }
    }


    setTimeout(() => {
      menu.state++;
      setTimeout(() => {
        menu.state++;
        setTimeout(() => {
          menu.state = 0;
        }, 300);
      }, 300);
    }, 300);


  }


}
