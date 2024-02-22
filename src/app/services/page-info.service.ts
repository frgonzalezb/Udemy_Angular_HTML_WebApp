import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageInfo } from '../interfaces/page-info.interface'

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  info: PageInfo = {};
  loaded = false;

  constructor(private http: HttpClient) {
    console.log('PageInfo created successfully!'); // dbg

    // // Leer el archivo JSON forma 1
    // this.http.get('assets/data/page-data.json')
    //   .subscribe(response => {
    //     console.log(response); // dbg
    //     console.log(response['title' as keyof typeof response]); // dbg
    //   });

    // Leer el archivo JSON forma 2
    this.http.get('assets/data/page-data.json')
      .subscribe((response: PageInfo) => {
        console.log(response); // dbg
        console.log(response.title); // dbg

        this.loaded = true;
        this.info = response;
      });
  }
}
