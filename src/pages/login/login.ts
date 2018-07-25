import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;
  password:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

login(){
  if(this.username == "admin" && this.password == "12345"){
    alert("เข้าระบบถูกต้อง");
    localStorage.setItem("userData",this.username);
    this.navCtrl.setRoot(TabsPage);
  } else {
    alert("ข้อมูลไม่ถูกต้อง");
  }
}

}
