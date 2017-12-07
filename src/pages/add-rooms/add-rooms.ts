import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Room } from '../../models/room/room.model';
import { RoomListService } from '../../services/room-list/room-list.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the AddRoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-rooms',
  templateUrl: 'add-rooms.html',
})
export class AddRoomsPage {

  room: Room = {
    name : '',
    numberSeats : 0,
    location : '',
    lastCleanUp : new Date(),
    busy : false,   
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private roomService : RoomListService,
    private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRoomsPage');
  }

  addRoom(room : Room){
    this.roomService.addRoom(room).then(ref => {
      this.toast.show(`${room.name} added!`);
      this.navCtrl.setRoot("HomePage", {key : ref.key})
    });
  }

}
