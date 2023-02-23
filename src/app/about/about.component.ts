import {Component, OnInit} from '@angular/core';

declare var KTMenu: any;
declare var KTDrawer: any;
declare var KTScroll: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {

  }


  ngOnInit(): void {
    KTMenu.createInstances();
    KTDrawer.createInstances();
    KTScroll.createInstances();
  }

  showMenu() {
    const element = document.getElementById("kt_body");
    const toggleIcon = document.getElementById('kt_aside_toggle');

    let status = element!.getAttribute("data-kt-aside-minimize");
    if (!status || status == 'off') {
      element!.setAttribute("data-kt-aside-minimize", "on")
      toggleIcon!.classList.add("active");
    } else {
      element!.setAttribute("data-kt-aside-minimize", "off")
      toggleIcon!.classList.remove("active");
    }

    const drawerElement = document.querySelector("#kt_aside");
    drawerElement!.classList.add("animating");
    setTimeout((function () {
      drawerElement!.classList.remove("animating")
    }), 300)
  }
}
