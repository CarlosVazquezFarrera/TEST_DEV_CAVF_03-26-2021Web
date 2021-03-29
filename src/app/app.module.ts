import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

import { LoginComponent } from './components/login/login.component';

import { PersonaFisicaComponent } from './components/persona-fisica/persona-fisica.component';
import { ActivopipePipe } from './pipes/activopipe.pipe';
import { FechaactualizacionpipePipe } from './pipes/fechaactualizacionpipe.pipe';
import { EditarPersonaDialogComponent } from './components/editar-persona-dialog/editar-persona-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonaFisicaComponent,
    LoginComponent,
    PersonaFisicaComponent,
    ActivopipePipe,
    FechaactualizacionpipePipe,
    EditarPersonaDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
