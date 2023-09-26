import { Component } from '@angular/core';
import { NotesFormComponent } from 'src/notes-form/notes-form.component';
import { NotesComponent } from 'src/notes-list/notes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NotesComponent, NotesFormComponent]
})
export class AppComponent {
}
