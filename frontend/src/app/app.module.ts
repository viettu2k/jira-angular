import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './views/components/navigation/sidebar/sidebar.component';
import { NavigationComponent } from './views/components/navigation/navigation/navigation.component';
import { NavbarLeftComponent } from './views/components/navigation/navbar-left/navbar-left.component';
import { ProjectComponent } from './views/pages/project/project.component';
import { WorksInProgressComponent } from './views/pages/works-in-progress/works-in-progress.component';
import { SvgIconComponent } from './views/components/shared/svg-icon/svg-icon.component';
import { SvgDefinitionsComponent } from './views/components/shared/svg-definitions/svg-definitions.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, NavigationComponent, NavbarLeftComponent, ProjectComponent, WorksInProgressComponent, SvgIconComponent, SvgDefinitionsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
