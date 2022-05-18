import { ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, ListBoxAllModule, RichTextEditorAllModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
