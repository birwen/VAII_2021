import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogComponentService } from '../blog-component.service';
import { BlogItem } from '../blogItem.model';

@Component({
  selector: 'app-blog-component-form',
  templateUrl: './blog-component-form.component.html',
  styleUrls: ['./blog-component-form.component.css']
})
export class BlogComponentFormComponent implements OnInit {

  constructor(public service: BlogComponentService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(this.service.blogItem.id);
    if (this.service.blogItem.id == 0) 
      this.insertRecord(form);
    else
      this.updateRecord(form);
    this.service.refreshList();
  }

  insertRecord(form: NgForm) {
    this.service.postBlogItem().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putBlogItem().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.blogItem = new BlogItem();
  }
}
