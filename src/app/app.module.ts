import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from "angular2-cookie/services/cookies.service";


import { FormControlDemoComponent } from './form-control-demo/form-control-demo.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { RoutingdemoComponent } from './routingdemo/routingdemo.component';
import { BindingdemoComponent } from './bindingdemo/bindingdemo.component';
import { CustompropertybindingComponent } from './custompropertybinding/custompropertybinding.component';
import { DirectivesdemoComponent } from './directivesdemo/directivesdemo.component';
import { HttpclientdemoComponent } from './httpclientdemo/httpclientdemo.component';
import { ObservabledemoComponent } from './observabledemo/observabledemo.component';
import { ChildcomponentComponent } from './custompropertybinding/childcomponent/childcomponent.component';
import { HighlightDirective } from './highlight.directive';
import { ServicedemoComponent } from './servicedemo/servicedemo.component';
import { PipecomponentComponent } from './pipecomponent/pipecomponent.component';
import { LocalDatePipe } from './local-date-pipe.pipe';
import { StorageComponent } from './storage/storage.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlDemoComponent,
    Tab1Component,
    Tab2Component,
    RoutingdemoComponent,
    BindingdemoComponent,
    CustompropertybindingComponent,
    DirectivesdemoComponent,
    HttpclientdemoComponent,
    ObservabledemoComponent,
    ChildcomponentComponent,
    HighlightDirective,
    ServicedemoComponent,
    PipecomponentComponent,
    LocalDatePipe,
    StorageComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'routing/tab1',
        component: Tab1Component
      },
      {
        path: 'routing/tab2',
        component: Tab2Component
      },
      {
        path: 'routing',
        component: RoutingdemoComponent
      },
      {
        path: 'form',
        component: FormControlDemoComponent
      },
      {
        path: 'binding',
        component: BindingdemoComponent
      },
      {
        path: 'custompropertybinding',
        component: CustompropertybindingComponent
      },
      {
        path: 'directives',
        component: DirectivesdemoComponent
      },
      {
        path: 'service',
        component: ServicedemoComponent
      },
      {
        path: 'observe',
        component: ObservabledemoComponent
      },
      {
        path: 'http',
        component: HttpclientdemoComponent
      },
      {
        path: 'pipe',
        component: PipecomponentComponent
      },
      {
        path: 'storage',
        component: StorageComponent
      }
    ]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
