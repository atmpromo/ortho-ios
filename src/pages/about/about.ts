import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-about',
    templateUrl: 'about.html',
})
export class AboutPage {
    page: any;
    params: any = {};
    data: any = {};
    events: any = {};

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public modalCtrl: ModalController
    ) {
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
            google_map: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d27583.016935900032!2d105.83403782350675!3d21.036132526875356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x0%3A0x85839944f456f253!2zUXXhuqNuZyB0csaw4budbmcgQmEgxJDDrG5o!3m2!1d21.037447999999998!2d105.8360008!5e0!3m2!1svi!2s!4v1496303332325',
            about: 'Le Dr. Normand Bach est un orthodontiste d\'expérience qui prend toujours le temps de donner le meilleur service possible. Passionné, il explique à chacun de ses patients le fonctionnement de ses traitements. Les besoins et la personnalité sont différents pour chaque patient et le Dr. Bach offre une attention sur mesure à tout coup.  Les traitements d\'orthodontie sont parfois inévitables et, qu\'on se le dise, ce n\'est pas ce qui a de plus plaisant. Dr. Bach vous offrira toujours plusieurs options de traitements de sorte que votre expérience puisse être la plus agréable possible et la mieux adaptée à vos besoins.' +
                'Voici les traitements offerts:\n' +
                '\n' +
                '- Boitiers conventionnels auto-ligaturants\n' +
                '\n' +
                '- Boitiers transparents esthétiques\n' +
                '\n' +
                '- Invisalign.\n' +
                '\n' +
                'Avec ou sans chirurgie orthognatique (des mâchoires).\n' +
                'Il vous présente des explications claires et honnêtes sur votre malocclusion.\n' +
                '\n' +
                'Il possède une expertise à la fine pointe. Le fait d\'être professeur agrégé et chef du service d’orthodontie de 1er cycle de l’Université de Montréal en est un gage.\n' +
                '\n' +
                'Il est conférncier national et international, entre autre aux Journées dentaires du Québec, qui est une réunion annuelle de tous les dentistes du Québec.\n' +
                '\n' +
                'Il s’engage à une qualité de traitement à la hauteur de vos attentes pour tous ses patients.\n' +
                '\n' +
                'Orthodontiste Bach a obtenu son doctorat en médecine dentaire de l’Université de Montréal en 2002, puis un certificat de résidence multidisciplinaire de l’Hôpital Notre-Dame en 2003. Il a pratiqué la médecine dentaire durant deux ans avant d’effectuer une maîtrise en sciences et une spécialisation en orthodontie à l’Université́ de Montréal.\n' +
                '\n' +
                'Il est membre des associations québécoise, canadienne, américaine et internationale d’orthodontie, fellow du Collège Royal des Dentistes du Canada, membre de l’Angle Society of Orthodontists. Orthodontiste Bach a reçu le Faculty First Award de l’American Association of Orthodontists, Il est présentement professeur agrégé à l’Université́ de Montréal et chef du service d’orthodontie 1er cycle.',
            address1: 'Montréal\n' +
                '747 Rue Roy Est,\n' +
                'Montréal, Qc, H2L 1E1\n' +
                '(514) 340-2224',
            address2: 'Hoan Kiem, Ha Noi, Viet Nam',
            phone1: '(514) 340-2224',
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
        console.log('ionViewDidLoad AboutPage');
    }
}
