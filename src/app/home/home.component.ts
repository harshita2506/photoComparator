import { Component, OnInit } from '@angular/core';
import * as images from '../../assets/images.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayList: any = (images as any).default;
  newArray: any = [];
  constructor() { }

  ngOnInit(): void {
    this.getDataFromService();
  }

  getDataFromService() {
    this.arrayList.forEach(element => {
      element.button = 'Compare';
    });
  }

  clickCom(data) {
    for (let i = 0; i < this.arrayList.length; i++) {
      if (this.arrayList[i].id === data.id) {
        if (this.arrayList[i].button === 'Compare') {
          this.arrayList[i].button = 'Remove';
          this.newArray.push(data);
        } else if (this.arrayList[i].button === 'Remove') {
          this.arrayList[i].button = 'Compare';
          this.deleteCompare(data);
        }
      }
    }
  }

  deleteCompare(data) {
    for (let i = 0; i < this.newArray.length; i++) {
      if (this.newArray[i].id === data.id) {
        this.newArray.splice(i, 1);
      }
    }
  }
}
