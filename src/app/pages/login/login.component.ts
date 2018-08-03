import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public menuList: Array<any>;
  public chose: Array<boolean>;

  constructor() {
    this.menuList = [
      '资源', '备课', '作业', '资讯',
    ];
    this.chose = new Array(this.menuList.length);
    this.chose.fill(false);
  }

  menuChose(item, i) {
    this.chose.fill(false);
    this.chose[i] = true;
    console.log(item, i);
  }

  ngOnInit() {
    console.log(this.chose);
  }

}
