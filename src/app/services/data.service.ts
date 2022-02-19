import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tabMenuList:any[] = []

  constructor() { }

  setTableMenuList(tabMenuList:any){
    this.tabMenuList = tabMenuList    
  }

  getTableMenuList(){
    return this.tabMenuList
  }


}
