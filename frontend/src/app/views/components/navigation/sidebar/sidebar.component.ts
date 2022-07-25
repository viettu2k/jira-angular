import { Component, OnInit, Input } from '@angular/core';
import { SideBarLink } from 'src/app/interface/ui-model/nav-link';
import { SideBarLinks } from 'src/app/config/sidebar';
import { Project } from 'src/app/interface/project';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() expanded: boolean | undefined;
  project!: Project;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 20;
  }

  sideBarLinks: SideBarLink[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.sideBarLinks = SideBarLinks;
  }
}
