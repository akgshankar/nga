import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cricket-master',
  templateUrl: './cricket-master.component.html',
  styleUrls: ['./cricket-master.component.css']
})
export class CricketMasterComponent implements OnInit {

  pageTitle = "C.M";

  footerText:string;
  constructor() { 

  }

  ngOnInit() {
    let year =(new Date()).getFullYear();
    this.footerText = year + " Cric Master";
  }

}
