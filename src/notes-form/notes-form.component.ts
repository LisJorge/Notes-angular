import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Notes } from 'src/notes-list/sample-data';

@Component({
  selector: 'app-notes-form',
  standalone: true,
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css', './../app/app.component.css'],
  imports: [ FormsModule, NgIf, ReactiveFormsModule, RouterModule]
})
export class NotesFormComponent {

  router = inject(Router);

  newNoteForm = new FormGroup({
    noteTitle: new FormControl('', Validators.required),
    noteDescription: new FormControl('', Validators.required),
  });

  submit(){
    const newNoteData = {
      title:  this.newNoteForm.value.noteTitle,
      description: this.newNoteForm.value.noteDescription,
    }
    if (this.newNoteForm.valid) {
      const ids = Notes.map((note) => note.id);
      let maxId = 0;
      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }
      let newNote = {
        id: maxId + 1,
        title: newNoteData.title!,
        text: newNoteData.description!,
      };
      Notes.unshift(newNote);
      //this.newNoteForm.reset(); No longer needed
      this.goBackHome();
    }
  }

  goBackHome(){
    this.router.navigateByUrl('');
  }
}