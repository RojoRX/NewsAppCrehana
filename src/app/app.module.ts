import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainnewsComponent } from './components/mainnews/mainnews.component';
import { MatCardModule } from '@angular/material/card';
import { MaintitleComponent } from './components/maintitle/maintitle.component';
import { FootitleComponent } from './components/footitle/footitle.component';
import { OthernewsComponent } from './components/othernews/othernews.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopsUpComponent } from './components/pops-up/pops-up.component';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { SideBComponent } from './components/side-b/side-b.component';
//import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    MainnewsComponent,
    MaintitleComponent,
    FootitleComponent,
    OthernewsComponent,
    PopsUpComponent,
    SideBComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    //   FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
