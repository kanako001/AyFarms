import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  model: any = {}
  loggedIn: boolean;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  login() {
      this.accountService.login(this.model).subscribe(response => {
        console.log(response);
        this.loggedIn = true
      }, error =>{
        console.log(error)
      })
  }

  logout() {
    this.loggedIn = false
  }

}
