import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes-form',
  standalone: true,
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css', './../app/app.component.css'],
  imports: [ FormsModule, NgIf]
})
export class NotesFormComponent {
  noteTitle?: string;
  noteDescription?: string;

  submit(){
    const newNote = {
      title: this.noteTitle,
      description: this.noteDescription,
    }
    alert(newNote)
  }
}