import { Component, SecurityContext, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Item {
    imgPath: string;
    position: SafeHtml;
    status: string;
    class: string;
    statusImgPath: string;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    wrong = 0;
    score = 0;
    loveThree = false;
    loveTwo = false;
    loveOne = false;
    path = 'assets/buttons/';

    constructor(
        public alertController: AlertController,
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        private sanitize: DomSanitizer) {    }


    items: Item[] =
        [
            {
                imgPath: `${this.path}heart1.png`,
                position: this.sanitize.bypassSecurityTrustStyle('left:15px'),

                status: null,
                class: 'rotate30',
                statusImgPath: null
            },
            {
                imgPath: `${this.path}heart2.png`,
                position: this.sanitize.bypassSecurityTrustStyle('top:50px; left:110px;'),

                status: null,
                class: 'rotate20',
                statusImgPath: null
            },
            {
                imgPath: `${this.path}heart3.png`,
                position: this.sanitize.bypassSecurityTrustStyle('top:30px; right:15px;'),

                status: null,
                class: 'rotate45',
                statusImgPath: null
            },
            {
                imgPath: `${this.path}heart4.png`,
                position: this.sanitize.bypassSecurityTrustStyle('top:215px;'),

                status: null,
                class: 'rotate15',
                statusImgPath: null
            },
            {
                imgPath: `${this.path}heart5.png`,
                position: this.sanitize.bypassSecurityTrustStyle('top:180px;left:100px;'),

                status: null,
                class: 'rotate15',
                statusImgPath: null
            },
            {
                imgPath: `${this.path}heart6.png`,
                position: this.sanitize.bypassSecurityTrustStyle('top:110px; left:0'),

                status: null,
                class: 'rotate20',
                statusImgPath: null
            },
            {
                imgPath: `${this.path}heart7.png`,
                position: this.sanitize.bypassSecurityTrustStyle('top:140px; right:0px;'),

                status: null,
                class: '',
                statusImgPath: null
            },

        ];

    proceedNextRound = (async () => {
        const alert = await this.alertController.create({
            header: 'You are qualified to hear the secret message',
            message: 'Note: This message will self delete within 24 hours from the first click of play button. Please wear earphones.',
            buttons: [{
                text: 'Yes, I am alone',
                handler: () => {
                    this.navCtrl.navigateForward('message');
                }
            }],

        });

        await alert.present();
    });



    openQuestion = ((item) => {
        const index = this.getRandomIntInclusive(0, this.functionsArray.length - 1);
        this.functionsArray[index](index, item);
    });

    //#region questions

    movieAlert = (async (index, item) => {
        const alert = await this.alertController.create({
            header: 'First Animation movie we watch in my room?',
            inputs: [
                {
                    name: 'croods',
                    type: 'text',
                    placeholder: 'Answer is Two words - Sentence case'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        // do something
                    }
                }, {
                    text: 'Ok',
                    handler: (alertData) => {
                        if (alertData.croods === 'The Croods') {
                            this.addScore();
                            item.status = true;
                            // return true;
                        } else {
                            this.wrongToast();
                            item.status = false;
                        }
                        this.functionsArray.splice(index, 1);
                        item.statusImgPath = this.questionStatus(item.status);
                        this.checkScore();
                    }
                }
            ]
        });

        await alert.present();
    });

    favoriteAlert = (async (index, item) => {
        const alert = await this.alertController.create({
            header: 'My Favorite part of your body',
            inputs: [
                {
                    name: 'butt',
                    type: 'text',
                    placeholder: 'Answer is in English'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        // something
                    }
                }, {
                    text: 'Ok',
                    handler: (alertData) => {
                        if (alertData.butt === 'butt') {
                            this.addScore();
                            item.status = true;
                        } else {
                            this.wrongToast();
                            item.status = false;
                        }
                        this.functionsArray.splice(index, 1);
                        item.statusImgPath = this.questionStatus(item.status);
                        this.checkScore();
                    }
                }
            ]
        });

        await alert.present();
    });

    mcdoAlert = (async (index, item) => {
        const alert = await this.alertController.create({
            header: 'What do I put inside Mcdonalds cheeseburger?',
            inputs: [
                {
                    name: 'fries',
                    type: 'text',
                    placeholder: 'Answer is Two words - Sentence case'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        // some cancel function
                    }
                }, {
                    text: 'Ok',
                    handler: (alertData) => {
                        if (alertData.fries === 'French Fries') {
                            this.addScore();
                            item.status = true;
                        } else {
                            this.wrongToast();
                            item.status = false;
                        }
                        this.functionsArray.splice(index, 1);
                        item.statusImgPath = this.questionStatus(item.status);
                        this.checkScore();
                    }
                }
            ]
        });

        await alert.present();
    });

    firetruckAlert = (async (index, item) => {
        const alert = await this.alertController.create({
            header: 'What sound I\'m scared the most?',
            inputs: [
                {
                    name: 'firetruck',
                    type: 'text',
                    placeholder: 'Answer is one word - Sentence case'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        // some cancel function
                    }
                }, {
                    text: 'Ok',
                    handler: (alertData) => {
                        if (alertData.firetruck === 'Firetruck') {
                            this.addScore();
                            item.status = true;
                        } else {
                            this.wrongToast();
                            item.status = false;
                        }
                        this.functionsArray.splice(index, 1);
                        item.statusImgPath = this.questionStatus(item.status);
                        this.checkScore();
                    }
                }
            ]
        });

        await alert.present();
    });

    concertAlert = (async (index, item) => {
        const alert = await this.alertController.create({
            header: 'Dream Concert',
            inputs: [
                {
                    name: 'lea',
                    type: 'radio',
                    label: 'Lea Salonga',
                    value: 'lea',
                    checked: true
                },
                {
                    name: 'westlife',
                    type: 'radio',
                    label: 'Westlife',
                    value: 'westlife'
                },
                {
                    name: 'airSupply',
                    type: 'radio',
                    label: 'Air Supply',
                    value: 'airSupply'
                },
                {
                    name: 'celine',
                    type: 'radio',
                    label: 'Celine Dion',
                    value: 'celine'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        // something
                    }
                }, {
                    text: 'Ok',
                    handler: (alertData) => {
                        if (alertData === 'celine') {
                            this.addScore();
                            item.status = true;
                        } else {
                            this.wrongToast();
                            item.status = false;
                        }
                        this.functionsArray.splice(index, 1);
                        item.statusImgPath = this.questionStatus(item.status);
                        this.checkScore();
                    }
                }
            ]
        });

        await alert.present();
    });

    starsAlert = (async (index, item) => {
        const alert = await this.alertController.create({
            header: 'I love to stare at the..',
            inputs: [
                {
                    name: 'moon',
                    type: 'radio',
                    label: 'Moon',
                    value: 'moon',
                    checked: true
                },
                {
                    name: 'sunset',
                    type: 'radio',
                    label: 'Sunset',
                    value: 'sunset'
                },
                {
                    name: 'stars',
                    type: 'radio',
                    label: 'Stars',
                    value: 'stars'
                },
                {
                    name: 'sunrise',
                    type: 'radio',
                    label: 'Sunrise',
                    value: 'sunrise'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                       // some cancel function
                    }
                }, {
                    text: 'Ok',
                    handler: (alertData) => {
                        if (alertData === 'stars') {
                            this.addScore();
                            item.status = true;
                        } else {
                            this.wrongToast();
                            item.status = false;
                        }
                        this.functionsArray.splice(index, 1);
                        item.statusImgPath = this.questionStatus(item.status);
                        this.checkScore();
                    }
                }
            ]
        });

        await alert.present();
    });

    birthPlaceAlert = (async (index, item) => {
        const alert = await this.alertController.create({
            header: 'Where was I supposed to be born?',
            inputs: [
                {
                    name: 'australia',
                    type: 'radio',
                    label: 'Australia',
                    value: 'australia',
                    checked: true
                },
                {
                    name: 'us',
                    type: 'radio',
                    label: 'United States',
                    value: 'us'
                },
                {
                    name: 'china',
                    type: 'radio',
                    label: 'China',
                    value: 'china'
                },
                {
                    name: 'canada',
                    type: 'radio',
                    label: 'Canada',
                    value: 'canada'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        // some cancel function
                    }
                }, {
                    text: 'Ok',
                    handler: (alertData) => {
                        if (alertData === 'australia') {
                            this.addScore();
                            item.status = true;
                        } else {
                            this.wrongToast();
                            item.status = false;
                        }
                        this.functionsArray.splice(index, 1);
                        item.statusImgPath = this.questionStatus(item.status);
                        this.checkScore();
                    }
                }
            ]
        });

        await alert.present();
    });


    superheroAlert = (async (index, item) => {
        const alert = await this.alertController.create({
            header: 'If I am a superhero, I will be..',
            inputs: [
                {
                    name: 'superman',
                    type: 'radio',
                    label: 'Superman',
                    value: 'superman',
                    checked: true
                },
                {
                    name: 'spiderman',
                    type: 'radio',
                    label: 'Spiderman',
                    value: 'spiderman'
                },
                {
                    name: 'batman',
                    type: 'radio',
                    label: 'Batman',
                    value: 'batman'
                },
                {
                    name: 'captain',
                    type: 'radio',
                    label: 'Captain America',
                    value: 'captain'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                       // some cancel function
                    }
                }, {
                    text: 'Ok',
                    handler: (alertData) => {
                        if (alertData === 'batman') {
                            this.addScore();
                            item.status = true;
                        } else {
                            this.wrongToast();
                            item.status = false;
                        }
                        this.functionsArray.splice(index, 1);
                        item.statusImgPath = this.questionStatus(item.status);
                        this.checkScore();
                    }
                }
            ]
        });

        await alert.present();
    });

    //#endregion


    functionsArray = [];



    ngOnInit(): void {
        this.resetGame();
    }

    async quit() {
        const alert = await this.alertController.create({
            header: 'Are you Sure',
            message: 'You really wanna give up on me??',
            buttons: [
                {
                    text: 'Hell No!',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        // something
                    }
                }, {
                    text: 'Yes, I gave up',
                    handler: () => {
                        // TODO exit app
                    }
                }
            ]
        });

        await alert.present();
    }

    async gameOver() {
        const alert = await this.alertController.create({
            header: 'Game Over Love',
            message: 'I thought you knew me well..',
            buttons: [
                {
                    text: 'Let me try Again',
                    cssClass: 'secondary',
                    handler: () => {
                        this.resetGame();
                    }
                }, {
                    text: 'I Quit',
                    handler: () => {
                        // TODO exit app
                    }
                }
            ]
        });
        await alert.present();

    }

    async wrongToast() {
        const toast = await this.toastCtrl.create({
            message: 'Wrong Answer. Sad...',
            duration: 2000
        });
        toast.present();
    }

    async correctToast() {
        const toast = await this.toastCtrl.create({
            message: 'Nice! You really know me.',
            duration: 2000
        });
        toast.present();
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random; // The maximum is inclusive and the minimum is inclusive
    }


    checkScore() {
        if (this.functionsArray.length <= 1) {
            this.gameOver();
        }
    }
    addScore() {
        this.score++;
        if (this.score === 1) {
                this.loveOne = true;
                this.correctToast();
            }
        if (this.score === 2) {
                this.loveTwo = true;
                this.correctToast();
            }

        if (this.score === 3) {
                this.loveThree = true;
                this.proceedNextRound();
            }

    }

    questionStatus(answer) {
        if (answer) {
            return 'assets/buttons/checked.png';
        } else {
            return 'assets/buttons/wrong.png';
        }
    }

    resetGame() {
        this.items.forEach((item) => {
            item.status = null;
            item.statusImgPath = null;
        });

        this.wrong = 0;
        this.score = 0;
        this.loveThree = false;
        this.loveTwo = false;
        this.loveOne = false;
        this.functionsArray = [
            this.mcdoAlert,
            this.concertAlert,
            this.birthPlaceAlert,
            this.firetruckAlert,
            this.starsAlert,
            this.superheroAlert,
            this.movieAlert,
            this.favoriteAlert
          ];
    }
}
