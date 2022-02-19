import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { RestCallService } from '../services/rest-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private restSer: RestCallService, private ds:DataService) { }

  ngOnInit(): void {
  }



}
