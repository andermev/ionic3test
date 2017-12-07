import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditRoomsPage } from './edit-rooms';

@NgModule({
  declarations: [
    EditRoomsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditRoomsPage),
  ],
})
export class EditRoomsPageModule {}
