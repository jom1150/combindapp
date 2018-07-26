import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData = {
    "username":"",
    "password":""
  }

  // ตัวแปรรับข้อมูลจาก api
  responseData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

login(){
 
  this.webapi.postData(this.userData,'login.php').then((result)=>{
    this.responseData = result;
    //alert(JSON.stringify(this.responseData)); 
    if(this.responseData.userData){
      let alert = this.alertCtrl.create({
        title:"สถานะการเข้าระบบ",
        subTitle:"เข้าระบบเรียบร้อยแล้ว",
        buttons:['Dismiss']
      });
      alert.present();
      localStorage.setItem("userData",this.userData.username);
     // ปิดหน้า Login กลับไปหน้าหลัก
      this.navCtrl.setRoot(TabsPage);
    }else{
      let alert = this.alertCtrl.create({
        title:"สถานะการเข้าระบบ",
        subTitle:"เข้าระบบไม่สำเร็จ",
        buttons:['Dismiss']
      });
      alert.present();
    }

  });

 
}

}
