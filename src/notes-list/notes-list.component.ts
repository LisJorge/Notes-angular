import { Component } from '@angular/core';
import { Notes } from './sample-data';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  imports: [ NgFor, NgIf ]
})
export class NotesComponent {
  notesList = Notes;

  show(id: number){
    this.notesList.find((note) => {
      if(note.id == id){
        note.shouldShow = !note.shouldShow
      }
    })
  }

}