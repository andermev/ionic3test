import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { RoomListService } from '../../services/room-list/room-list.service';
import { Observable } from 'rxjs/Observable';
import { Room } from '../../models/room/room.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  roomList$: Observable<Room[]>;

  constructor(public navCtrl: NavController, private roomService : RoomListService) {
    this.roomList$ = this.roomService
          .getRoomList()
          .snapshotChanges()
          .map(changes => {
            return changes.map(c => ({
              key : c.payload.key, ...c.payload.val(),
            }))
          })
  }

}
