import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {AboutPage} from '../pages/about/about';

import {CalldrPage} from '../pages/calldr/calldr';
import {HowtogetPage} from '../pages/howtoget/howtoget';
import {SendmessagePage} from '../pages/sendmessage/sendmessage';
import {SendpicturePage} from '../pages/sendpicture/sendpicture';
import {CallNumber} from '@ionic-native/call-number';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{ title: string, component: any, icon: string }>;

    constructor(
        private callNumber: CallNumber,
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {
                title: 'Home',
                component: HomePage,
                icon: 'md-home'
            },
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

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        if (page.title == "Call Dr. Bach") {
            this.callNumber.callNumber("1-514-340-2224", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(err => console.log('Error launching dialer', err));
        } else {
            this.nav.setRoot(page.component);
        }
    }
}
