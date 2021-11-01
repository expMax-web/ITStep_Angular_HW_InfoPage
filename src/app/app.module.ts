import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { ExtraInfoComponent } from './extra-info/extra-info.component';
import { KeySkillsComponent } from './key-skills/key-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AvatarComponent,
    MainInfoComponent,
    ExtraInfoComponent,
    KeySkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
