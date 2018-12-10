import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StripHTMLPipe } from '../strip-html.pipe';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [ StripHTMLPipe ]
})

@Injectable({
  providedIn: 'root'
})

export class NewsComponent implements OnInit {

  posts$: Observable<any[]>;

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('http://blog.coddy.com.br/wp-json/wp/v2/posts?_embed', {
      params: {
        per_page: '2'
      }
    });
  }

  constructor(private http: HttpClient) {
    this.posts$ = this.getPosts();
  }

  ngOnInit() {
  }

}