import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

@IonicPage()
@Component({
  selector: 'page-coursedetail',
  templateUrl: 'coursedetail.html',
})
export class CoursedetailPage {

    responseData:any;
    getid:number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webapi: WebapiServiceProvider) {
      this.getid = navParams.get('id');
  }

  ionViewDidLoad() {
    this.webapi.getData('feed_course_detail.php?cid='+this.getid).then((result)=>{
      // console.log(result);
      this.responseData = result;
    });   
  }

}
