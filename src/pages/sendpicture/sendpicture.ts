import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {Base64} from '@ionic-native/base64';
import {ApiProvider} from "../../providers/api/api";

/**
 * Generated class for the SendpicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sendpicture',
    templateUrl: 'sendpicture.html',
})
export class SendpicturePage {
    events: any = {};
    fullname: any = "";
    email: any = "";
    message: any = "";
    imgfile: any = "";

    constructor(
        public navCtrl: NavController,
        public ngZone: NgZone,
        public navParams: NavParams,
        public camera: Camera,
        private base64: Base64,
        public api: ApiProvider,
        public actionSheetController: ActionSheetController,
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SendpicturePage');
    }


    sendMessage() {
        if (this.message && this.fullname && this.email) {
            var postData = {
                name: this.fullname,
                email: this.email,
                message: this.message,
                picture: this.imgfile
            };

            this.api.loading();
            this.api.postRequest(ApiProvider.METHODS.SENDEMAIL, postData).then((data: any) => {
                this.api.hideLoading();
                if (data && data.status) {
                    console.log(data.status + "::abcd");
                    console.log(data.data); // data received by server
                    console.log(data.headers);
                    this.api.showToast(data.message);
                    // this.navCtrl.pop();

                    this.ngZone.run(() => {
                        this.fullname = "";
                        this.email = "";
                        this.message = "";
                        this.imgfile = null;
                    });

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

    takePicture() {
        const actionSheet = this.actionSheetController.create({
            title: 'Choose option',
            buttons: [
                {
                    text: 'Camera',
                    handler: () => {
                        this.pickPhoto(this.camera.PictureSourceType.CAMERA);
                        console.log('Camera clicked');
                    }
                },
                {
                    text: 'Photo Library',
                    handler: () => {
                        this.pickPhoto(this.camera.PictureSourceType.SAVEDPHOTOALBUM);
                        console.log('PHOTO LIBRARY clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    pickPhoto(sourceType) {
        const options: CameraOptions = {
            quality: 30,
            targetWidth: 500,
            targetHeight: 500,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            mediaType: this.camera.MediaType.PICTURE,
            encodingType: this.camera.EncodingType.PNG
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // this.base64.encodeFile(imageData).then((base64File: string) => {
            //     let base64Image = 'data:image/jpeg;base64,' + base64File;
            //     this.imgfile = base64Image;
            // }, (err) => {
            //     console.log(err);
            // });
            let base64Image = 'data:image/png;base64,' + imageData;
            this.imgfile = base64Image;
        }, (err) => {

            // Handle error
        });
    }

    takePictureOld() {
        const options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // this.base64.encodeFile(imageData).then((base64File: string) => {
            //     let base64Image = 'data:image/jpeg;base64,' + base64File;
            //     this.imgfile = base64Image;
            // }, (err) => {
            //     console.log(err);
            // });
            let base64Image = 'data:image/png;base64,' + imageData;
            this.imgfile = base64Image;
        }, (err) => {
            // Handle error
        });
    }

}
