import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
// import {HTTP} from "@ionic-native/http";
import {ApiProvider} from '../../providers/api/api';

/**
 * Generated class for the SendmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sendmessage',
    templateUrl: 'sendmessage.html',
})
export class SendmessagePage {
    events: any = {};
    fullname: any = "";
    email: any = "";
    message: any = "";

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public api: ApiProvider
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SendmessagePage');
    }

    sendMessage() {
        if (this.message && this.fullname && this.email) {
            var postData = {
                name: this.fullname,
                email: this.email,
                message: this.message,
            };

            this.api.loading();
            this.api.postRequest(ApiProvider.METHODS.SENDEMAIL, postData).then((data: any) => {
                this.api.hideLoading();
                if (data && data.status) {
                    //this.imgfile = data;
                    console.log(data.status + "::abcd");
                    console.log(data.data); // data received by server
                    console.log(data.headers);
                    this.api.showToast(data.message);
                    // this.navCtrl.pop();

                    this.fullname = "";
                    this.email = "";
                    this.message = "";
                } else {
                    this.api.showToast(data.message);
                }
            }).catch((error) => {
                this.api.hideLoading();
                console.log(error.status + "::efgh");
                console.log(error.error); // error message as string
                console.log(error.headers);
                this.api.showToast(error.message);
            });
        }
    }
}
