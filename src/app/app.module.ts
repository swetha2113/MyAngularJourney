import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { IamlearningComponent } from './iamlearning/iamlearning.component';
import { TestComponent } from './test/test.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateBindingComponent } from './template-binding/template-binding.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';

import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    IamlearningComponent,
    TestComponent,
    ClassBindingComponent,
    StylebindingComponent,
    EventBindingComponent,
    TemplateBindingComponent,
    TwoWayDatabindingComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
