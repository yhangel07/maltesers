import { Component, OnInit, ViewChild } from '@angular/core';
import {Howl, Howler} from 'howler';
import { IonRange } from '@ionic/angular';

export interface Track {
  name: string;
  path: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  trackID = null;
  progress= 0;
  @ViewChild('range', { static: false}) range: IonRange;

  track: Track = {
    name: 'Secret Message',
    path: './assets/terrified.mp3'
  };

  constructor() { }

  ngOnInit() {
  }

  start(){
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: [this.track.path],
      onplay: () =>{
        this.isPlaying = true;
        this.activeTrack = this.track;
        this.updateProgress();
      },
      onend: () =>{

      }
    });
    this.trackID = this.player.play();
  }
  saveSeek = null;
  togglePlayer(pause){
    this.isPlaying = !pause;
    
    if(pause){
      this.player.pause();
       this.saveSeek = this.player.seek(this.activeTrack);
    }else{
      this.player.play(this.trackID);
      this.player.seek(this.saveSeek, this.trackID);
    }
  }

  updateProgress(){
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress(); 
    }, 1000);
  }
  seek(){
    let newValue = +this.range.value;
    let duration = this.player.duration;
    this.player.seek(duration * (newValue/100));
  }

  
}
