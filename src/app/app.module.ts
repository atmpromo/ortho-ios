import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {AboutPage} from '../pages/about/about';
import {CalldrPage} from '../pages/calldr/calldr';
import {HowtogetPage} from '../pages/howtoget/howtoget';
import {SendmessagePage} from '../pages/sendmessage/sendmessage';
import {SendpicturePage} from '../pages/sendpicture/sendpicture';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Camera} from '@ionic-native/camera';//import in app.module.ts
import {Base64} from '@ionic-native/base64';
import {HTTP} from '@ionic-native/http';
import {CallNumber} from '@ionic-native/call-number';
import {ApiProvider} from '../providers/api/api';
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        AboutPage,
        CalldrPage,
        HowtogetPage,
        SendmessagePage,
        SendpicturePage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        AboutPage,
        CalldrPage,
        HowtogetPage,
        SendmessagePage,
        SendpicturePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        CallNumber,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Camera,
        Base64,
        HTTP,
        ApiProvider
    ]
})
export class AppModule {
}
