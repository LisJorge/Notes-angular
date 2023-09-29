import { Component } from '@angular/core';
import { Notes } from './sample-data';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrls: ['/./../app/app.component.css', './notes-list.component.css'],
  imports: [ NgFor, NgIf, RouterModule ]
})
export class NotesListComponent {
  notesList = Notes;

  show(id: number){
    this.notesList.find((note) => {
      if(note.id == id){
        note.shouldShow = !note.shouldShow
      }
    })
  }

}