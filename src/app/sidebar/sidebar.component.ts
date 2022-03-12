import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  // TODO: Research a better way to route everything
  goHome() {
    this._router.navigateByUrl('/home')
  }
  goExplore() {
    this._router.navigateByUrl('/explore')
  }
  goToNotifications() {
    this._router.navigateByUrl('/notifications')
  }
  goToMessages() {
    this._router.navigateByUrl('/messages')
  }
  goToFollowers() {
    this._router.navigateByUrl('/followers')
  }
  goToFollowing() {
    this._router.navigateByUrl('/following')
  }
}
