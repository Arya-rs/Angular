import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';

import { ItemComponent } from './components/content/item/item.component';
import { ItemDetailsComponent } from './components/content/item-details/item-details.component';

import { InterpolationComponent } from './components/content/interpolation/interpolation.component';
import { BindingComponent } from './components/content/binding/binding.component';
import { DirectivesComponent } from './components/content/directives/directives.component';
import { NgifComponent } from './components/content/directives/ngif/ngif.component';
import { NgforComponent } from './components/content/directives/ngfor/ngfor.component';
import { ParentComponentComponent } from './components/content/parent-component/parent-component.component';
import { InputComponent } from './components/content/parent-component/input/input.component';
import { OutputComponent } from './components/content/parent-component/output/output.component';
import { BackButtonComponent } from './components/back-button/back-button.component';


const appRoutes : Routes =[
  {path:'',component:ContentComponent},
  {path:'interpolation',component:InterpolationComponent},
  {path:'binding',component:BindingComponent},
  {path:'componentInteraction',component:ParentComponentComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'ngif',component:NgifComponent},
  {path:'ngfor',component:NgforComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ItemComponent,
    ItemDetailsComponent,
    InterpolationComponent,
    BindingComponent,
    DirectivesComponent,
    ParentComponentComponent,
    InputComponent,
    OutputComponent,
    NgifComponent,
    NgforComponent,
    BackButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot (appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
