import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { AlertModule, AccordionModule, TypeaheadModule } from 'ng2-bootstrap';
import { AppRoutingModule } from './app-routing.module';

// 一级组件
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JokeComponent } from './joke/joke.component';
import { RobotComponent } from './robot/robot.component';

// 二级组件


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JokeComponent,
    RobotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
        