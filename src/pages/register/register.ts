import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WebapiServiceProvider} from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

// ประกาศตัวแปร
userData = {
  "fullname":"",
  "email":"",
  "tel":"",
  "username":"",
  "password":""
}

responseData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webapi: WebapiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

register(){
  this.webapi.postData(this.userData,'register.php').then((result)=>{
this.responseData = result;
if(this.responseData.userData){
alert('ลงทะเบียนเรียบร้อยแล้ว');
this.navCtrl.setRoot(TabsPage);
}else{
  alert('ผิดพลาด! ไม่สามารถลงทะเบียนได้');
}
  });
}

}
