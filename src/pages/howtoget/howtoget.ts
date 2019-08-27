import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';

/**
 * Generated class for the HowtogetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-howtoget',
    templateUrl: 'howtoget.html',
})
export class HowtogetPage {
    data: any = {};
    lat = 45.5208359;
    lng = -73.5725403;

    constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
        this.data = {
            label: {
                txtContact: 'Contact',
                txtContactUs: 'Contact Us',
                txtAboutUs: 'Contact information',
                txtPhone: 'Phone',
                txtGetInTouch: 'Get In Touch',
                txtAddress: 'Address',
                txtSendMessage: 'Send Message',
                txtFullName: 'Full Name',
                txtEmail: 'Email',
                txtMessage: 'Message',
                txtSend: 'Send',
                txtSendAMessage: 'Send A Message',
                txtFollow: 'Follow Us',
                txtFollowWidth: 'Follow Us Width!'
            },
            google_map: sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.466220079764!2d-73.57364518469937!3d45.52082283768483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bca298817ab%3A0x39a40070b9bf676!2s747+Rue+Roy+E%2C+Montr%C3%A9al%2C+QC+H2X+1E1%2C+Canada!5e0!3m2!1sen!2sin!4v1556516068927!5m2!1sen!2sin'),
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            address1: '2b/324 Thuy Khue, Tay Ho, Ha Noi',
            address2: 'Hoan Kiem, Ha Noi, Viet Nam',
            phone1: '+84 868120192',
            phone2: '+84 868271095',
            email1: 'luann4099@gmail.com',
            email2: 'koodinh@gmail.com',
            open_time: '08:00 Am - 11:30 Am',
            close_time: '01:00 Pm - 04:00 Pm',
            txtWorkingTime: 'We work from Monday to Saturday weekly',
            workingTime: '9:00 AM - 4:00 PM'
        };
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HowtogetPage');
    }

    openNativeMapApp() {
        const lat = this.lat;
        const lng = this.lng;

        if /* if we're on iOS, open in Apple Maps */
        ((navigator.platform.indexOf('iPhone') !== -1) ||
            (navigator.platform.indexOf('iPad') !== -1) ||
            (navigator.platform.indexOf('iPod') !== -1)) {
            window.open('maps://maps.google.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=');
        } else /* else use Google */{
            window.open('https://maps.google.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=', '_system', 'location=yes');
        }
        // const start = [];
        // start.push(lat);
        // start.push(lng);
        //
        // const options: LaunchNavigatorOptions = {
        //     app: this.launchNavigator.APP.GOOGLE_MAPS
        // };
        // this.launchNavigator.navigate(start, options)
        //     .then(success => {
        //         console.log(success);
        //     }, error => {
        //         console.log(error);
        //     });
    }
}
