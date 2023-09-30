import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Notes } from 'src/notes-list/sample-data';

@Component({
  selector: 'app-note-details',
  standalone: true,
  templateUrl: './note-details.component.html',
  styleUrls: ['/./../app/app.component.css', '/./../notes-list/notes-list.component.css'],
  imports: [RouterModule, NgIf],
})
export class NoteDetailsComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = Notes.find((note) => note.id === this.id);
}
