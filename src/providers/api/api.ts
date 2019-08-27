// import {HttpClient, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Platform, LoadingController, Loading, ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http, RequestOptions, Headers} from '@angular/http';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
    private loader: any;
    private toast: any;

    constructor(
        public http: Http,
        public platform: Platform,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
    ) {
        console.log('Hello ApiProvider Provider');
    }

    APIBASEURL = "http://gsquarewebtech.com/api/";

    static METHODS = {
        SENDEMAIL: "sendemail.php"
    };


    isDevice() {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            return false;
        } else {
            return true;
        }
    }

    showToast(msg, duration = 3000) {
        this.toast = this.toastCtrl.create({
            message: msg,
            duration: duration,
            position: 'Bottom'
        });
        this.toast.present();
    }

    private callHttpGet(url, headers) {
        return new Promise((resolve, reject) => {
            let options = new RequestOptions({headers: headers});

            this.http.get(url, options)
            // .timeout(20000, new Error('Request Timeout'))
                .map(res => res.json())
                .subscribe(data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    });
        });
    }

    private callHttpPost(url, body, headers) {
        return new Promise((resolve, reject) => {
            let options = new RequestOptions({headers: headers});

            this.http.post(url, body, options)
            // .timeout(20000, new Error("Request Timeout"))
                .map(res => res.json())
                .subscribe(data => {
                        console.log("POST Reponse " + JSON.stringify(data));
                        resolve(data);
                    },
                    (error) => {
                        reject(error);
                    }
                );
        });
    }


    public postRequest(methodName, postData = {}) {
        var ref = this;
        let url = this.getBaseApiUrl() + methodName;
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.callHttpPost(url, postData, {});
    }

    public getRequest(methodName, param = {}) {
        var ref = this;
        let url = this.getBaseApiUrl() + methodName + "?" + this.generateQueryString(param);
        let headers = {};
        return this.callHttpGet(url, headers);
    }

    public getBaseApiUrl() {
        if (this.isDevice()) {
            return this.APIBASEURL;
        }
        return "http://localhost:8100/api/";
    }


    private generateQueryString(obj) {
        var str = [];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        }
        return str.join("&");
    }


    public loading(msg = null) {
        this.loader = this.loadingCtrl.create({
            content: msg ? msg : ''
        });
        this.loader.present();
    }

    public hideLoading() {
        if (this.loader) {
            this.loader.dismiss();
            this.loader = null;
        }
    }

}
