import { Component, OnInit,ViewChild } from '@angular/core';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  
  otp: string;
  showOtpComponent = true;
  val:any;

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
    constructor(){
      this.selected=this.btn1;
      this.otp = this.val;
    }
  move(ele:any, prev:any, curr:any, next:any){
    
    if(ele.key=="Backspace"){
      if(prev){
        prev.focus();
      }
    }
    else{
      if(next && curr.length==curr.maxlength){
        next.focus();
      }
      
    }
  }
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
    @ViewChild('ngOtpInput') ngOtpInput: any;
    config :NgOtpInputConfig = {
      allowNumbersOnly: false,
      length: 5,
      isPasswordInput: false,
      disableAutoFocus: false,
      placeholder: ''
    };
    onOtpChange(otp:any) {
      this.otp = otp;
    }
  
    setVal(val:any) {
      this.ngOtpInput.setValue(val);
    }
  
    toggleDisable(){
      if(this.ngOtpInput.otpForm){
        if(this.ngOtpInput.otpForm.disabled){
          this.ngOtpInput.otpForm.enable();
        }else{
          this.ngOtpInput.otpForm.disable();
        }
      }
    }
  
    onConfigChange() {
      this.showOtpComponent = false;
      this.otp = this.val;
      setTimeout(() => {
        this.showOtpComponent = true;
      }, 0);
    }
  }
