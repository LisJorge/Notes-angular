import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotesFormComponent } from 'src/notes-form/notes-form.component';
import { NotesListComponent } from 'src/notes-list/notes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]
})
export class AppComponent {
}
