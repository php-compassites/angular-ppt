import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NavComponent} from "./nav/nav.component";
import { WelcomeComponent } from './welcome/welcome.component';
import {routes} from "./app.routes";
import { BasicsComponent } from './basics/basics.component';
import { StructureComponent } from './structure/structure.component';
import { ComponentComponent } from './component/component.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { DebuggingComponent } from './debugging/debugging.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    BasicsComponent,
    StructureComponent,
    ComponentComponent,
    DatabindingComponent,
    DirectiveComponent,
    PipeComponent,
    DebuggingComponent,
    DeploymentComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
