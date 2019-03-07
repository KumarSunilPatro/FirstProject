import { Component } from '@angular/core';

@Component({
    selector:'header-app',
    templateUrl:'app.headercomponent.html',
    styleUrls:['app.headercomponent.css']
})
export class headercomponent{
    name:string="Srinivas";
    f1(){
    let a=10
        alert(a);
    }
    appTitle: string = 'Welcome';
    appList:any[]=[
    {
        id:1,
    },
      {
        id:2,
     }];
    colortoapply:boolean=true;
    color:string="red blue";
    mulclass={
        bold:true,
        blue:false,
        red:true

    }
    value=true;
    size=100;
    styletoapply={
        "background-color":"red",
        "fomt-size":"100px"
    }
     ProductDetails=[
         {
         
            "productName":"Apple",            
            "description":  "This is Apple",           
            "imageUrl":"assets/apple.jpg"
     },
     {
         
        "productName":"Orange",            
        "description":  "This is orange",           
        "imageUrl":"assets/orange.jpg"
 },
 {
         
    "productName":"Grapes",            
    "description":  "This is grape",           
    "imageUrl":"assets/grape.jpg"
},
{
         
    "productName":"Banana",            
    "description":  "This is Banana",           
    "imageUrl":"assets/banana.jpg"
},
{
         
    "productName":"Lichi",            
    "description":  "This is lichi",           
    "imageUrl":"assets/lichi.jpg"
}

    ]
}