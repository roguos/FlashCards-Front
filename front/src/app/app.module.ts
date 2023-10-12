import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { MainComponent } from './components/template/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { CardDefaultComponent } from './components/template/cards/card-default/card-default.component';
import { CardImageComponent } from './components/template/cards/card-image/card-image.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashcardsViewComponent } from './components/template/views/flashcards-view/flashcards-view.component';
import { DashboardViewComponent } from './components/template/views/dashboard-view/dashboard-view.component';
import { CarouselComponent } from './components/template/carousel/carousel.component';
import { CreateFlashcardModalComponent } from './components/template/create-flashcard-modal/create-flashcard-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    CardDefaultComponent,
    CardImageComponent,
    FlashcardsViewComponent,
    DashboardViewComponent,
    CarouselComponent,
    CreateFlashcardModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
