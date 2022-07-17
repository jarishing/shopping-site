import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GetDataService } from '../get-data.service';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  allItems = [];
  selectedCategory = "All";
  items= [];

  username = null;
  userid = null;
  staff = null;

  constructor(
    private _router: Router,
    private getDataService: GetDataService,
    private UserService: UserService,
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getAllItem();
    
  }

  getAllItem(){
    this.getDataService.getAllItem()
        .subscribe( result => {
            this.allItems = result;
            this.items = JSON.parse(JSON.stringify(this.allItems));
            let userData = this.UserService.getUserData();
            this.username = userData.username;
            this.userid = userData.id;
            this.staff = userData.staff;
        })
  }

  categorySelected( value ){
    this.selectedCategory = value;
    let temp;
    if( value == 'All')
        temp = this.allItems
    else
        temp = this.allItems.filter( item => item.main_category == value );

    return this.items = JSON.parse(JSON.stringify(temp));
  }

  inStoreOnCheck(){
    return this._router.navigate(['/in-store']);
  }

  cartOnCheck(){
    return this._router.navigate(['/cart']);
  }

  orderHistoryOnCheck(){
    return this._router.navigate(['/order-history', this.userid]);
  }

  itemOnCheck(itemId){
    return this._router.navigate(['/order', itemId]);
  }

  loginOnCheck(){
    this.UserService.logOut();
    return this._router.navigate(['/login']);
  }
    
}


// allItems = [
//     {
//         "item_name": {
//             "en": "Daimon Ramen",
//             "ch": "大门拉麵",
//             "zh": "大門拉麵"
//         },
//         "main_category": {
//             "en": "Ramen",
//             "ch": "拉麵",
//             "zh": "拉麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "988603d0-4778-11ec-a733-43bd6560806a",
//         "mainCatCode": "RAMEN",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥",
//             "走筍",
//             "麵淋",
//             "麵硬"
//         ],
//         "price": 62,
//         "exchange_points": 500,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Daimon Special Ramen",
//             "ch": "大门特製拉麵",
//             "zh": "大門特製拉麵"
//         },
//         "main_category": {
//             "en": "Ramen",
//             "ch": "拉麵",
//             "zh": "拉麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "d3ac1300-4778-11ec-a733-43bd6560806a",
//         "mainCatCode": "RAMEN",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥",
//             "走筍",
//             "麵淋",
//             "麵硬"
//         ],
//         "price": 78,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Spicy Ramen",
//             "ch": "鬼门拉麵",
//             "zh": "鬼門拉麵"
//         },
//         "main_category": {
//             "en": "Ramen",
//             "ch": "拉麵",
//             "zh": "拉麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "f2c13a40-4778-11ec-a733-43bd6560806a",
//         "mainCatCode": "RAMEN",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥",
//             "麵淋",
//             "麵硬"
//         ],
//         "price": 65,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Daimon Tsukemen",
//             "ch": "大门沾麵",
//             "zh": "大門沾麵"
//         },
//         "main_category": {
//             "en": "Tsukemen",
//             "ch": "沾麵",
//             "zh": "沾麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "4c466720-4779-11ec-a733-43bd6560806a",
//         "mainCatCode": "RAMEN",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥",
//             "走筍",
//             "麵淋",
//             "麵硬"
//         ],
//         "price": 68,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Daimon Spicy Tsukemen",
//             "ch": "赤大門沾麵",
//             "zh": "赤大門沾麵"
//         },
//         "main_category": {
//             "en": "Tsukemen",
//             "ch": "沾麵",
//             "zh": "沾麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "35dcbc40-477f-11ec-9526-1319cd947a42",
//         "mainCatCode": "TSUKEMEN",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥",
//             "走筍",
//             "麵淋",
//             "麵硬"
//         ],
//         "price": 68,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Daimon Vegetable  Ramen",
//             "ch": "大门野菜拉麵",
//             "zh": "大門野菜拉麵"
//         },
//         "main_category": {
//             "en": "Ramen",
//             "ch": "拉麵",
//             "zh": "拉麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "4039ef00-477f-11ec-9526-1319cd947a42",
//         "mainCatCode": "RAMEN",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走辣",
//             "麵淋",
//             "麵硬",
//             "走麵"
//         ],
//         "price": 68,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Black Garlic Oil Tsukemen",
//             "ch": "黑蒜油沾麵",
//             "zh": "黑蒜油沾麵"
//         },
//         "main_category": {
//             "en": "Tsukemen",
//             "ch": "沾麵",
//             "zh": "沾麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "453d6ed0-4781-11ec-9526-1319cd947a42",
//         "mainCatCode": "TSUKEMEN",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥",
//             "走筍",
//             "麵淋",
//             "麵硬"
//         ],
//         "price": 72,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Daimon BBQ Pork Tsukemen",
//             "ch": "大門叉燒沾麵",
//             "zh": "大門叉燒沾麵"
//         },
//         "main_category": {
//             "en": "Tsukemen",
//             "ch": "沾麵",
//             "zh": "沾麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "52151770-4781-11ec-9526-1319cd947a42",
//         "mainCatCode": "TSUKEMEN",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥",
//             "走筍",
//             "麵淋",
//             "麵硬"
//         ],
//         "price": 85,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Daimon Aburasoba",
//             "ch": "大門油麵",
//             "zh": "大門油麵"
//         },
//         "main_category": {
//             "en": "Aburasoba",
//             "ch": "油麵",
//             "zh": "油麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "110fe030-4c3a-11ec-849d-ef338761aea5",
//         "mainCatCode": "ABURASOBA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥",
//             "走筍",
//             "麵淋",
//             "麵硬"
//         ],
//         "price": 62,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Taiwanese Style Aburasoba",
//             "ch": "台灣風油麵",
//             "zh": "台灣風油麵"
//         },
//         "main_category": {
//             "en": "Aburasoba",
//             "ch": "油麵",
//             "zh": "油麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "27be7490-4c3a-11ec-849d-ef338761aea5",
//         "mainCatCode": "ABURASOBA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥",
//             "麵淋",
//             "麵硬"
//         ],
//         "price": 58,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Curry Mazesoba",
//             "ch": "咖喱混麵",
//             "zh": "咖喱混麵"
//         },
//         "main_category": {
//             "en": "Mazesoba",
//             "ch": "混麵",
//             "zh": "混麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "3b02f6e0-5746-11ec-a876-eb4fe5f3534f",
//         "mainCatCode": "MAZESOBA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥",
//             "走筍",
//             "麵淋",
//             "麵硬"
//         ],
//         "price": 68,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Black Garlic Oil Mazesoba",
//             "ch": "黑蒜油混麵",
//             "zh": "黑蒜油混麵"
//         },
//         "main_category": {
//             "en": "Mazesoba",
//             "ch": "混麵",
//             "zh": "混麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "46e17270-5746-11ec-a876-eb4fe5f3534f",
//         "mainCatCode": "MAZESOBA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥",
//             "走筍",
//             "麵淋",
//             "麵硬"
//         ],
//         "price": 68,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "BBQ Pork (1pc)",
//             "ch": "叉燒(1片)",
//             "zh": "叉燒(1片)"
//         },
//         "main_category": {
//             "en": "Topping",
//             "ch": "追加配料",
//             "zh": "追加配料"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "7512a810-5f1d-11ec-86d4-63f1aea54cfd",
//         "mainCatCode": "TOPPING",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 12,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Seaweed (3pcs)",
//             "ch": "紫菜 (3片)",
//             "zh": "紫菜 (3片)"
//         },
//         "main_category": {
//             "en": "Topping",
//             "ch": "追加配料",
//             "zh": "追加配料"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "817fd2c0-62c5-11ec-86d4-63f1aea54cfd",
//         "mainCatCode": "TOPPING",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 10,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Bamboo Shoot",
//             "ch": "筍乾",
//             "zh": "筍乾"
//         },
//         "main_category": {
//             "en": "Topping",
//             "ch": "追加配料",
//             "zh": "追加配料"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "c8e83d80-62c7-11ec-86d4-63f1aea54cfd",
//         "mainCatCode": "TOPPING",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 12,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Soft Boiled Egg",
//             "ch": "温泉玉子",
//             "zh": "温泉玉子"
//         },
//         "main_category": {
//             "en": "Topping",
//             "ch": "追加配料",
//             "zh": "追加配料"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "ccb8a140-913c-11ec-91f9-d5e6d385ed2a",
//         "mainCatCode": "TOPPING",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 12,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Marinated Egg",
//             "ch": "味蛋",
//             "zh": "味蛋"
//         },
//         "main_category": {
//             "en": "Topping",
//             "ch": "追加配料",
//             "zh": "追加配料"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "ecb3bbb0-913c-11ec-91f9-d5e6d385ed2a",
//         "mainCatCode": "TOPPING",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 15,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Spicy Sauce (Light)",
//             "ch": "辛辣醬 (小辣)",
//             "zh": "辛辣醬 (小辣)"
//         },
//         "main_category": {
//             "en": "Topping",
//             "ch": "追加配料",
//             "zh": "追加配料"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "f94ed080-913c-11ec-91f9-d5e6d385ed2a",
//         "mainCatCode": "TOPPING",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 5,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Spicy Sauce (Medium)",
//             "ch": "辛辣醬 (中辣)",
//             "zh": "辛辣醬 (中辣)"
//         },
//         "main_category": {
//             "en": "Topping",
//             "ch": "追加配料",
//             "zh": "追加配料"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "6fb50690-913d-11ec-91f9-d5e6d385ed2a",
//         "mainCatCode": "TOPPING",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 10,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Spicy Sauce (Extra Spicy)",
//             "ch": "辛辣醬 (大辣)",
//             "zh": "辛辣醬 (大辣)"
//         },
//         "main_category": {
//             "en": "Topping",
//             "ch": "追加配料",
//             "zh": "追加配料"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "ca5a4340-915a-11ec-97bf-019c771da441",
//         "mainCatCode": "TOPPING",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 10,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Black Garlic Oil",
//             "ch": "黑蒜油",
//             "zh": "黑蒜油"
//         },
//         "main_category": {
//             "en": "Topping",
//             "ch": "追加配料",
//             "zh": "追加配料"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "d97461d0-915a-11ec-97bf-019c771da441",
//         "mainCatCode": "TOPPING",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 8,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "BBQ Pork Don",
//             "ch": "日式叉燒丼",
//             "zh": "日式叉燒丼"
//         },
//         "main_category": {
//             "en": "Rice",
//             "ch": "飯類",
//             "zh": "飯類"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "05086350-915b-11ec-97bf-019c771da441",
//         "mainCatCode": "RICE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥"
//         ],
//         "price": 35,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "BBQ Pork Fried Rice",
//             "ch": "叉燒炒飯",
//             "zh": "叉燒炒飯"
//         },
//         "main_category": {
//             "en": "Rice",
//             "ch": "飯類",
//             "zh": "飯類"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "1269d560-915b-11ec-97bf-019c771da441",
//         "mainCatCode": "RICE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥"
//         ],
//         "price": 38,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "BBQ Pork Fried Rice with Pan-fried Dumpling Set",
//             "ch": "叉燒炒飯拼煎餃子定食",
//             "zh": "叉燒炒飯拼煎餃子定食"
//         },
//         "main_category": {
//             "en": "Rice",
//             "ch": "飯類",
//             "zh": "飯類"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "20952720-915b-11ec-97bf-019c771da441",
//         "mainCatCode": "RICE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走蔥"
//         ],
//         "price": 48,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Fried Pork with Vegetable Set",
//             "ch": "豚肉炒野菜定食",
//             "zh": "豚肉炒野菜定食"
//         },
//         "main_category": {
//             "en": "Set",
//             "ch": "定食",
//             "zh": "定食"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "45612a90-915b-11ec-97bf-019c771da441",
//         "mainCatCode": "SET",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走辣"
//         ],
//         "price": 60,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Fried Chicken Set",
//             "ch": "日式炸雞定食",
//             "zh": "日式炸雞定食"
//         },
//         "main_category": {
//             "en": "Set",
//             "ch": "定食",
//             "zh": "定食"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "59923bd0-915b-11ec-97bf-019c771da441",
//         "mainCatCode": "SET",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 60,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Fried Pork with Vegetable",
//             "ch": "豚肉炒野菜單點",
//             "zh": "豚肉炒野菜單點"
//         },
//         "main_category": {
//             "en": "Set",
//             "ch": "定食",
//             "zh": "定食"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "6a770840-915b-11ec-97bf-019c771da441",
//         "mainCatCode": "SET",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [
//             "走辣"
//         ],
//         "price": 50,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Fried Chicken",
//             "ch": "日式炸雞單點",
//             "zh": "日式炸雞單點"
//         },
//         "main_category": {
//             "en": "Set",
//             "ch": "定食",
//             "zh": "定食"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "775f0490-915b-11ec-97bf-019c771da441",
//         "mainCatCode": "SET",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 50,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Marinated Egg",
//             "ch": "味蛋",
//             "zh": "味蛋"
//         },
//         "main_category": {
//             "en": "Snacks",
//             "ch": "小食",
//             "zh": "小食"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "45142690-915c-11ec-97bf-019c771da441",
//         "mainCatCode": "SNACKS",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 15,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Creamy Croquette",
//             "ch": "忌廉薯餅",
//             "zh": "忌廉薯餅"
//         },
//         "main_category": {
//             "en": "Snacks",
//             "ch": "小食",
//             "zh": "小食"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "a46b7fd0-915c-11ec-97bf-019c771da441",
//         "mainCatCode": "SNACKS",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 18,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Japanese BBQ Pork Ramen",
//             "ch": "叉燒拉麵",
//             "zh": "叉燒拉麵"
//         },
//         "main_category": {
//             "en": "Ramen",
//             "ch": "拉麵",
//             "zh": "拉麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "f557ce10-b94f-11ec-a234-e9a199c1e001",
//         "mainCatCode": "RAMEN",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 58,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Special Ramen",
//             "ch": "特製拉麵",
//             "zh": "特製拉麵"
//         },
//         "main_category": {
//             "en": "Ramen",
//             "ch": "拉麵",
//             "zh": "拉麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "de3091d0-b950-11ec-a234-e9a199c1e001",
//         "mainCatCode": "RAMEN",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 75,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Spicy Ramen",
//             "ch": "辛味拉麵",
//             "zh": "辛味拉麵"
//         },
//         "main_category": {
//             "en": "Ramen",
//             "ch": "拉麵",
//             "zh": "拉麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "ed5c63a0-b950-11ec-a234-e9a199c1e001",
//         "mainCatCode": "RAMEN",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 68,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Black Garlic Oil Ramen",
//             "ch": "黑蒜油拉麵",
//             "zh": "黑蒜油拉麵"
//         },
//         "main_category": {
//             "en": "Ramen",
//             "ch": "拉麵",
//             "zh": "拉麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "f9cac320-b950-11ec-a234-e9a199c1e001",
//         "mainCatCode": "RAMEN",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 68,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Creamy Corn Soup",
//             "ch": "日式粟米湯",
//             "zh": "日式粟米湯"
//         },
//         "main_category": {
//             "en": "Soup",
//             "ch": "湯",
//             "zh": "湯"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "56199750-b951-11ec-a234-e9a199c1e001",
//         "mainCatCode": "SOUP",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 32,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Spaghetti Carbonara",
//             "ch": "芝士卡邦尼意粉",
//             "zh": "芝士卡邦尼意粉"
//         },
//         "main_category": {
//             "en": "Spaghatti",
//             "ch": "意粉",
//             "zh": "意粉"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "796a4560-b951-11ec-a234-e9a199c1e001",
//         "mainCatCode": "SPAGHATTI",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 58,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Spaghetti with Special Meat Sauce",
//             "ch": "特製肉醬意粉",
//             "zh": "特製肉醬意粉"
//         },
//         "main_category": {
//             "en": "Spaghatti",
//             "ch": "意粉",
//             "zh": "意粉"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "b635ee40-b951-11ec-a234-e9a199c1e001",
//         "mainCatCode": "SPAGHATTI",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 55,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Spaghetti with Smoked Salmon & Mushroom in Pepperoncino Style",
//             "ch": "煙三文魚蘑菇蒜香意粉",
//             "zh": "煙三文魚蘑菇蒜香意粉"
//         },
//         "main_category": {
//             "en": "Spaghatti",
//             "ch": "意粉",
//             "zh": "意粉"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "c4845860-b951-11ec-a234-e9a199c1e001",
//         "mainCatCode": "SPAGHATTI",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 68,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Spaghetti with Bacon in Spinach Sauce",
//             "ch": "菠菜汁煙肉忌廉意粉",
//             "zh": "菠菜汁煙肉忌廉意粉"
//         },
//         "main_category": {
//             "en": "Spaghatti",
//             "ch": "意粉",
//             "zh": "意粉"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "25945e20-b952-11ec-a234-e9a199c1e001",
//         "mainCatCode": "SPAGHATTI",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 58,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "House Blend (Hot)",
//             "ch": "招牌咖啡(熱)",
//             "zh": "招牌咖啡(熱)"
//         },
//         "main_category": {
//             "en": "Coffee",
//             "ch": "咖啡",
//             "zh": "咖啡"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "3e339ef0-b952-11ec-a234-e9a199c1e001",
//         "mainCatCode": "COFFEE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 24,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "House Blend (Iced)",
//             "ch": "招牌咖啡(凍)",
//             "zh": "招牌咖啡(凍)"
//         },
//         "main_category": {
//             "en": "Coffee",
//             "ch": "咖啡",
//             "zh": "咖啡"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "5a5e2960-b952-11ec-a234-e9a199c1e001",
//         "mainCatCode": "COFFEE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 28,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Caramel Cappuccino (Hot)",
//             "ch": "焦糖泡沫咖啡 (熱)",
//             "zh": "焦糖泡沫咖啡 (熱)"
//         },
//         "main_category": {
//             "en": "Coffee",
//             "ch": "咖啡",
//             "zh": "咖啡"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "67b7ac30-b952-11ec-a234-e9a199c1e001",
//         "mainCatCode": "COFFEE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 30,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Caramel Cappuccino (Iced)",
//             "ch": "焦糖泡沫咖啡 (凍)",
//             "zh": "焦糖泡沫咖啡 (凍)"
//         },
//         "main_category": {
//             "en": "Coffee",
//             "ch": "咖啡",
//             "zh": "咖啡"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "b681b260-b953-11ec-a234-e9a199c1e001",
//         "mainCatCode": "COFFEE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 35,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Café Vienna (Hot)",
//             "ch": "忌廉咖啡(熱)",
//             "zh": "忌廉咖啡(熱)"
//         },
//         "main_category": {
//             "en": "Coffee",
//             "ch": "咖啡",
//             "zh": "咖啡"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "ce3c5f90-b953-11ec-a234-e9a199c1e001",
//         "mainCatCode": "COFFEE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 28,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Café Vienna (Iced)",
//             "ch": "忌廉咖啡(凍)",
//             "zh": "忌廉咖啡(凍)"
//         },
//         "main_category": {
//             "en": "Coffee",
//             "ch": "咖啡",
//             "zh": "咖啡"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "d9d7b7a0-b953-11ec-a234-e9a199c1e001",
//         "mainCatCode": "COFFEE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 30,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Café Latte (Hot)",
//             "ch": "鮮奶咖啡(熱)",
//             "zh": "鮮奶咖啡(熱)"
//         },
//         "main_category": {
//             "en": "Coffee",
//             "ch": "咖啡",
//             "zh": "咖啡"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "c9f29e90-b96c-11ec-a234-e9a199c1e001",
//         "mainCatCode": "COFFEE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 28,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Café Latte (Iced )",
//             "ch": "鮮奶咖啡(凍)",
//             "zh": "鮮奶咖啡(凍)"
//         },
//         "main_category": {
//             "en": "Coffee",
//             "ch": "咖啡",
//             "zh": "咖啡"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "d45ea8f0-b96d-11ec-a234-e9a199c1e001",
//         "mainCatCode": "COFFEE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 30,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Hazelnut Mocha (Hot)",
//             "ch": "榛子朱古力咖啡 (熱)",
//             "zh": "榛子朱古力咖啡 (熱)"
//         },
//         "main_category": {
//             "en": "Coffee",
//             "ch": "咖啡",
//             "zh": "咖啡"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "e3d7d770-b96d-11ec-a234-e9a199c1e001",
//         "mainCatCode": "COFFEE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 35,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Hazelnut Mocha (Iced)",
//             "ch": "榛子朱古力咖啡 (凍)",
//             "zh": "榛子朱古力咖啡 (凍)"
//         },
//         "main_category": {
//             "en": "Coffee",
//             "ch": "咖啡",
//             "zh": "咖啡"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "ee7d84e0-b96d-11ec-a234-e9a199c1e001",
//         "mainCatCode": "COFFEE",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 35,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Coke",
//             "ch": "可口可樂",
//             "zh": "可口可樂"
//         },
//         "main_category": {
//             "en": "Others",
//             "ch": "其他",
//             "zh": "其他"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "8fb5a4f0-b96e-11ec-a234-e9a199c1e001",
//         "mainCatCode": "OTHERS",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 18,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Coke Zero",
//             "ch": "零系可樂",
//             "zh": "零系可樂"
//         },
//         "main_category": {
//             "en": "Others",
//             "ch": "其他",
//             "zh": "其他"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "aa50dcd0-b96e-11ec-a234-e9a199c1e001",
//         "mainCatCode": "OTHERS",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 18,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Sprite",
//             "ch": "雪碧",
//             "zh": "雪碧"
//         },
//         "main_category": {
//             "en": "Others",
//             "ch": "其他",
//             "zh": "其他"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "291e4200-b96f-11ec-a234-e9a199c1e001",
//         "mainCatCode": "OTHERS",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 18,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Apple Juice",
//             "ch": "蘋果汁",
//             "zh": "蘋果汁"
//         },
//         "main_category": {
//             "en": "Others",
//             "ch": "其他",
//             "zh": "其他"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "69e3adc0-b96f-11ec-a234-e9a199c1e001",
//         "mainCatCode": "OTHERS",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 22,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Orange Juice",
//             "ch": "橙汁",
//             "zh": "橙汁"
//         },
//         "main_category": {
//             "en": "Others",
//             "ch": "其他",
//             "zh": "其他"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "6e6bbc00-b971-11ec-a234-e9a199c1e001",
//         "mainCatCode": "OTHERS",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 22,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Chololate (Hot)",
//             "ch": "朱古力 (熱)",
//             "zh": "朱古力 (熱)"
//         },
//         "main_category": {
//             "en": "Others",
//             "ch": "其他",
//             "zh": "其他"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "786523e0-b971-11ec-a234-e9a199c1e001",
//         "mainCatCode": "OTHERS",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 25,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Chololate (Iced)",
//             "ch": "朱古力 (凍)",
//             "zh": "朱古力 (凍)"
//         },
//         "main_category": {
//             "en": "Others",
//             "ch": "其他",
//             "zh": "其他"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "849038d0-b971-11ec-a234-e9a199c1e001",
//         "mainCatCode": "OTHERS",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 28,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Tea (Hot)",
//             "ch": "紅茶 (熱)",
//             "zh": "紅茶 (熱)"
//         },
//         "main_category": {
//             "en": "Tea",
//             "ch": "茶",
//             "zh": "茶"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "06e3de90-b972-11ec-a234-e9a199c1e001",
//         "mainCatCode": "TEA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 22,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Tea (Iced)",
//             "ch": "紅茶 (凍)",
//             "zh": "紅茶 (凍)"
//         },
//         "main_category": {
//             "en": "Tea",
//             "ch": "茶",
//             "zh": "茶"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "2cd84320-b977-11ec-a234-e9a199c1e001",
//         "mainCatCode": "TEA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 25,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Lemon Tea / Water (Hot)",
//             "ch": "檸檬茶 / 水 (熱)",
//             "zh": "檸檬茶 / 水 (熱)"
//         },
//         "main_category": {
//             "en": "Tea",
//             "ch": "茶",
//             "zh": "茶"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "dac2acb0-b97b-11ec-a234-e9a199c1e001",
//         "mainCatCode": "TEA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 22,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Lemon Tea / Water (Iced)",
//             "ch": "檸檬茶 / 水 (凍)",
//             "zh": "檸檬茶 / 水 (凍)"
//         },
//         "main_category": {
//             "en": "Tea",
//             "ch": "茶",
//             "zh": "茶"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "e87ff630-b982-11ec-a234-e9a199c1e001",
//         "mainCatCode": "TEA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 25,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Milk Tea (Iced)",
//             "ch": "奶茶(凍)",
//             "zh": "奶茶(凍)"
//         },
//         "main_category": {
//             "en": "Tea",
//             "ch": "茶",
//             "zh": "茶"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "85d92e60-b983-11ec-a234-e9a199c1e001",
//         "mainCatCode": "TEA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 25,
//         "exchange_points": 0,
//         "active_status": true
//     },
//     {
//         "item_name": {
//             "en": "Matcha (Hot)",
//             "ch": "抹茶 (熱)",
//             "zh": "抹茶 (熱)"
//         },
//         "main_category": {
//             "en": "Japanese Matcha",
//             "ch": "日本抹茶",
//             "zh": "日本抹茶"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "a900f7b0-b983-11ec-a234-e9a199c1e001",
//         "mainCatCode": "JPMATCHA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 25,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Matcha (Iced)",
//             "ch": "抹茶 (凍)",
//             "zh": "抹茶 (凍)"
//         },
//         "main_category": {
//             "en": "Japanese Matcha",
//             "ch": "日本抹茶",
//             "zh": "日本抹茶"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "e3c5ad00-b983-11ec-a234-e9a199c1e001",
//         "mainCatCode": "JPMATCHA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 28,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Matcha Latte with Cream (Hot)",
//             "ch": "忌廉牛奶抹茶 (熱)",
//             "zh": "忌廉牛奶抹茶 (熱)"
//         },
//         "main_category": {
//             "en": "Japanese Matcha",
//             "ch": "日本抹茶",
//             "zh": "日本抹茶"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "78f49800-b984-11ec-a234-e9a199c1e001",
//         "mainCatCode": "JPMATCHA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 28,
//         "exchange_points": 0,
//         "active_status": false
//     },
//     {
//         "item_name": {
//             "en": "Matcha Latte with Cream (Iced)",
//             "ch": "忌廉牛奶抹茶 (凍)",
//             "zh": "忌廉牛奶抹茶 (凍)"
//         },
//         "main_category": {
//             "en": "Japanese Matcha",
//             "ch": "日本抹茶",
//             "zh": "日本抹茶"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "sub_2_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "description": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "item_id": "8888a180-b984-11ec-a234-e9a199c1e001",
//         "mainCatCode": "JPMATCHA",
//         "subCatCode": "",
//         "sub_2_CatCode": "",
//         "ingredients": [],
//         "ordering_options": [],
//         "price": 32,
//         "exchange_points": 0,
//         "active_status": false
//     }
// ]


//     allFoodCategory = [
//     {
//         "main_category": {
//             "en": "Ramen",
//             "ch": "拉麵",
//             "zh": "拉麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "mainCatCode": "RAMEN",
//         "subCatCode": ""
//     },
//     {
//         "main_category": {
//             "en": "Tsukemen",
//             "ch": "沾麵",
//             "zh": "沾麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "mainCatCode": "TSUKEMEN",
//         "subCatCode": ""
//     },
//     {
//         "main_category": {
//             "en": "Aburasoba",
//             "ch": "油麵",
//             "zh": "油麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "mainCatCode": "ABURASOBA",
//         "subCatCode": ""
//     },
//     {
//         "main_category": {
//             "en": "Mazesoba",
//             "ch": "混麵",
//             "zh": "混麵"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "mainCatCode": "MAZESOBA",
//         "subCatCode": ""
//     },
//     {
//         "main_category": {
//             "en": "Rice",
//             "ch": "飯類",
//             "zh": "飯類"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "mainCatCode": "RICE",
//         "subCatCode": ""
//     },
//     {
//         "main_category": {
//             "en": "Set",
//             "ch": "定食",
//             "zh": "定食"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "mainCatCode": "SET",
//         "subCatCode": ""
//     },
//     {
//         "main_category": {
//             "en": "Snacks",
//             "ch": "小食",
//             "zh": "小食"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "mainCatCode": "SNACKS",
//         "subCatCode": ""
//     },
//     {
//         "main_category": {
//             "en": "Others",
//             "ch": "其他",
//             "zh": "其他"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "mainCatCode": "OTHERS",
//         "subCatCode": ""
//     },
//     {
//         "main_category": {
//             "en": "Tea",
//             "ch": "茶",
//             "zh": "茶"
//         },
//         "sub_category": {
//             "en": "",
//             "ch": "",
//             "zh": ""
//         },
//         "mainCatCode": "TEA",
//         "subCatCode": ""
//     }
//   ]