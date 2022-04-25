import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

    phoneNo = 6388166436;
    btn1 = "btn1";
    btn2 = "btn2";
    btn3 = "btn3";
    btn4 = "btn4";
    format1 = "format1";
    format2 = "format2";
    format3 = "format3";
    format4 = "format4";
    date1 = "date1"
    date2 = "date2"
    date3 = "date3"
    date4 = "date4"
    selected = "btn1";
    selectedfont = "";
    selectedyear = "";
    onSubmit(ele: any) {
  
    }
    Color(btn: any) {
  
      this.selected = btn;
      console.log(this.selected)
    }
  
    onClick(font: any) {
      this.selectedfont = font;
  
    }
    changeYears(year:any){
      this.selectedyear=year;
    }
  
    ngOnInit(): void {
    }
  
  }
