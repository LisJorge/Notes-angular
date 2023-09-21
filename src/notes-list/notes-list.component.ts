import { Component } from '@angular/core';
import { Notes } from './sample-data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  imports: [ NgFor ]
})
export class NotesComponent {
   notesList = Notes;
}