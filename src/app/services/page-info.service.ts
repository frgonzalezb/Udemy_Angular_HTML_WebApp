import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageInfo } from '../interfaces/page-info.interface'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  info: PageInfo = {};
  loaded = false;

  workteam: any[] = [];

  constructor(private http: HttpClient) {

    this.loadInfo();
    this.loadWorkTeam();

    // // Leer el archivo JSON, forma 1
    // this.http.get('assets/data/page-data.json')
    //   .subscribe(response => {
    //     console.log(response); // dbg
    //     console.log(response['title' as keyof typeof response]); // dbg
    //   });
  }

  private loadInfo() {
    // Leer el archivo JSON, forma 2
    this.http.get('assets/data/page-data.json')
      .subscribe((response: PageInfo) => {
        this.loaded = true;
        this.info = response;
      });
  }

  private loadWorkTeam() {
    this.http.get(environment.urlApi + 'work_team.json')
      .subscribe((response: any) => {
        this.workteam = response;
      });
  }
}
