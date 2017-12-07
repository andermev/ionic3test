import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Room } from '../../models/room/room.model';
import { RoomListService } from '../../services/room-list/room-list.service';
import { Item } from 'ionic-angular/components/item/item';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the EditRoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-rooms',
  templateUrl: 'edit-rooms.html',
})
export class EditRoomsPage {

  room : Room;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private roomService : RoomListService, 
    private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.room = this.navParams.get('room');
  }
  
  saveRoom(room : Room){
    this.roomService.editRoom(room).then(() => {
      this.toast.show(`${room.name} saved!`);
      this.navCtrl.setRoot('HomePage');
    });
  }

  removeRoom(room : Room){
    this.roomService.removeRoom(room).then(() => {
      this.toast.show(`${room.name} removed!`);
      this.navCtrl.setRoot("HomePage");
    });
  }

}
