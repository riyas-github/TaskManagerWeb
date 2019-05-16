import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AddTaskComponent } from './taskmanager/addtask/addtask.component';
import { ListTaskComponent } from './taskmanager/listtask/listtask.component';
import { Ng5SliderModule } from 'ng5-slider';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { MatSliderModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatSliderModule} from '@angular/material/slider';
import {TaskManagerSerivce } from './taskmanager/taskmanager.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    ReactiveFormsModule,
    FormsModule,
     BsDatepickerModule.forRoot(),
     BrowserAnimationsModule
  ],
  providers: [TaskManagerSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
