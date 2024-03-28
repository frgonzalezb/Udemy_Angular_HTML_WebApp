import { Component } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year: number = new Date().getFullYear();

  constructor(public _pageInfo: PageInfoService) {}

  ngOnInit() {}
}
