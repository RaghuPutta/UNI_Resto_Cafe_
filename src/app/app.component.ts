import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
import { RestCallService } from './services/rest-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resto-cart';

  constructor(private restSer: RestCallService, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getDishes()
  }

  async getDishes() {
    try {
      const DATA = await this.restSer.getDishCategories()
      if (!DATA) {
        throw new Error()
      }
      console.log(DATA)
      this.ds.setTableMenuList(DATA[0]['table_menu_list'])

    } catch (error) {
      console.log("Error: " + error)
    }
  }

  naviagteToMenu() {
    this.router.navigateByUrl("menu")

  }
}
