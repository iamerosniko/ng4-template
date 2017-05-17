import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
})
export class AppComponent  { 
  name = 'Angular'; 
  items:any[] = [];
  Journey=[
      "ImageName","WIN_20170416_10_41_12_Pro.jpg"
  ];
}
