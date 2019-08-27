import {Component, ViewChild} from '@angular/core';
import {Nav, NavController} from 'ionic-angular';
import {AboutPage} from '../about/about';

import {CalldrPage} from '../calldr/calldr';
import {HowtogetPage} from '../howtoget/howtoget';
import {SendmessagePage} from '../sendmessage/sendmessage';
import {SendpicturePage} from '../sendpicture/sendpicture';
import {CallNumber} from "@ionic-native/call-number";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    pages: Array<{ title: string, component: any, icon: string }>;

    constructor(
        public navCtrl: NavController,
        private callNumber: CallNumber
    ) {
        // used for an example of ngFor and navigation
        this.pages = [
            // {
            //     title: 'Home',
            //     component: HomePage,
            //     icon: 'md-home'
            // },
            {
                title: 'About',
                component: AboutPage,
                icon: 'md-list-box'
            },
            {
                title: 'How to get there?',
                component: HowtogetPage,
                icon: 'md-navigate'
            },
            {
                title: 'Call Dr. Bach',
                component: CalldrPage,
                icon: 'md-call'
            },
            {
                title: 'Send a message',
                component: SendmessagePage,
                icon: 'md-text'
            },
            {
                title: 'Send pictures',
                component: SendpicturePage,
                icon: 'md-reverse-camera'
            }
        ];
    }


    openPage(page) {
        if (page.title == "Call Dr. Bach") {
            this.callNumber.callNumber("1-514-340-2224", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(err => console.log('Error launching dialer', err));
        } else {
            this.navCtrl.setRoot(page.component);
        }
    }

}
