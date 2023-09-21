import { Component } from '@angular/core';
import { NotesComponent } from 'src/notes-list/notes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NotesComponent]
})
export class AppComponent {
  title = 'solo-learn-app';
}
