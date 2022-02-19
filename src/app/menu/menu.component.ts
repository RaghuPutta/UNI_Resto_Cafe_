import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DataService } from '../services/data.service';
import { RestCallService } from '../services/rest-call.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  scrollableItems: MenuItem[] = [];
  activeItem2!: MenuItem;
  dishes!: any[]
  itemCount: any = 0
  restaurantName!:string

  constructor(private ds: DataService, private restSer:RestCallService) { }

  ngOnInit(): void {
    this.getDishes();
    // this.ds.getTableMenuList().forEach((menu_category, index) => {
    //   this.scrollableItems.push({
    //     "label": menu_category['menu_category'],
    //     "icon": menu_category['menu_category_image'],
    //     "id": menu_category['menu_category_id'],
    //     "items": menu_category['category_dishes'],
    //     "command": (event) => {
    //       this.getSelectedItem(event)
    //     }
    //   })
    // })
  }

  getTableMenuLists(){
    console.log(this.ds.getTableMenuList())

    this.ds.getTableMenuList().forEach((menu_category, index) => {
      this.scrollableItems.push({
        "label": menu_category['menu_category'],
        "icon": menu_category['menu_category_image'],
        "id": menu_category['menu_category_id'],
        "items": menu_category['category_dishes'],
        "command": (event) => {
          //event.originalEvent: Browser event
          //event.item: menuitem metadata
          this.getSelectedItem(event)
        }
      })
    })
    // this.activeItem2 = this.scrollableItems[0]
    // this.dishes = this.scrollableItems[0].items
  }

  getSelectedItem(event: any) {
    console.log(event)
    this.dishes = event.item.items
    this.dishes.forEach(dish => { dish.itemCount = 0, dish.recipe = "https://www.kannammacooks.com/wp-content/uploads/Bengaluru-darshini-style-sambar-recipe-restaurant-sweet-sambar-13.jpg" })
    console.log(this.dishes)

  }

  onPlusClick(count: number) {
    this.itemCount++

  }

  onMinusClick(count: number): number {
    let dishCount = 0;

    if (count >= 0) {
      if (this.itemCount == 1) {
        this.itemCount = 0
      } else if (count !== 0) {
        this.itemCount--
      }
      if (count === 0) {
        dishCount = 0
      }
      else {
        dishCount = count - 1
      }
    }
    return dishCount
  }

  async getDishes() {
    try {
      const DATA = await this.restSer.getDishCategories()
      if (!DATA) {
        throw new Error()
      }
      console.log(DATA)
      this.restaurantName = DATA[0]['restaurant_name']
      this.ds.setTableMenuList(DATA[0]['table_menu_list'])
      this.getTableMenuLists()
    } catch (error) {
      console.log("Error: " + error)
    }
  }

}
