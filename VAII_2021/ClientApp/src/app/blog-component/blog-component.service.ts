import { Injectable } from '@angular/core';
import { BlogItem } from './blogItem.model';
import { HttpClient } from '@angular/common/http';
import { AuthorizeService } from '../../api-authorization/authorize.service';

@Injectable({
  providedIn: 'root'
})
export class BlogComponentService {

  constructor(private http: HttpClient, private auth: AuthorizeService) { }

  blogItem: BlogItem = new BlogItem();
  readonly baseURL = 'https://localhost:5001/api/BlogItems'
  list: BlogItem[];

  postBlogItem() {
    this.blogItem.userName = this.auth.getUserName();
    this.blogItem.date = new Date();
    console.log("post blogItem");
    return this.http.post(this.baseURL, this.blogItem);

  }

  putBlogItem() {
    this.blogItem.date = new Date();
    this.blogItem.userName = this.auth.getUserName();
    console.log("put blogItem");
    return this.http.put(`${this.baseURL}/${this.blogItem.id}`, this.blogItem);
  }

  deteteServer(id: number) {
    return this.http.delete(`${this.baseURL}/${this.blogItem.id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as BlogItem[]);
  }
}
