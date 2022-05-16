import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userDetails:  any = [];

  constructor(private _AuthService: AuthService) {
    this.userDetails = _AuthService.currentUser.value;
  }

  ngOnInit(): void {}
}
