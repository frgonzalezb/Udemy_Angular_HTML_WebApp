import { Component } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public _pageInfo: PageInfoService,
              private router: Router) {}

  searchProduct(txt: string) {
    if (txt.length < 1) {
      return;
    }

    this.router.navigate(['/search', txt]);
  }
}
