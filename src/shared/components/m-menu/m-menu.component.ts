import {Component, Input, OnInit} from '@angular/core';

declare var KTMenu: any;

@Component({
  selector: 'm-menu',
  templateUrl: './m-menu.component.html'
})
export class MMenuComponent implements OnInit {
  @Input() menuId: string | undefined;

  constructor() {

  }

  ngOnInit(): void {
    KTMenu.createInstances();
  }

  showMenu() {
    var menuElement = document.querySelector("#" + this.menuId);
    var menu = KTMenu.getInstance(menuElement);
    menu.show();
  }

}
