import { Component, OnInit } from '@angular/core';
import { BlogItem } from './blogItem.model';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { BlogComponentService } from './blog-component.service';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css']
})
export class BlogComponentComponent implements OnInit {

  public model: BlogItem;

  constructor(public service: BlogComponentService, public auth: AuthorizeService) {
    this.model = new BlogItem();
    this.model.title = '';
    this.model.text = '';
    this.model.userName = this.auth.getUserName();
  }

  ngOnInit() {
    this.service.refreshList();
  }

  populatedForm(selectedRecord: BlogItem) {
    this.service.blogItem = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this blog?'))
      this.service.deteteServer(id)
        .subscribe(
          res => {
            this.service.refreshList();
          },
          err => { console.log(err) }
        );
  }
}
