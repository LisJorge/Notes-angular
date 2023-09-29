import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { NotesFormComponent } from './notes-form/notes-form.component';
import { NotesListComponent } from './notes-list/notes-list.component';

const routes: Routes = [
    { path: '', component: NotesListComponent },
    { path: 'new', component: NotesFormComponent },
  ]

bootstrapApplication(AppComponent,{
    providers: [provideRouter(routes)]
});