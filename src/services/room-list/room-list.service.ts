import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Room } from "./../../models/room/room.model";

@Injectable()
export class RoomListService {

    private roomListRef = this.db.list<Room>('room-list');

    constructor(private db: AngularFireDatabase){ }

    getRoomList() {
        return this.roomListRef;
    }

    addRoom(room : Room){
        return this.roomListRef.push(room);
    }

    editRoom(room : Room){
        return this.roomListRef.update(room.key, room);
    }

    removeRoom(room: Room){
        return this.roomListRef.remove(room.key);
    }
}