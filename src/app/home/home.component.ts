import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';


//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[BlogService]
})

// a simple class
export class HomeComponent implements OnInit,OnDestroy{

  public allBlogs = [

    {

      "blogId": "1",
      "lastModified": "2017-11-14",
      "created": "2017-11-14",
      "tags": [],
      "author": "Devansh Kumar",
      "Category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is blog body",
      "description": "This is the firstbody description",
      "title": "This is first blog"

    },

    {

      "blogId": "2",
      "lastModified": "2018-12-14",
      "created": "2018-12-14",
      "tags": [],
      "author": "Simran Sharma",
      "Category": "Horror",
      "isPublished": false,
      "views": 10,
      "bodyHtml": "This is blog body",
      "description": "Thisis the second body description",
      "title": "This is second blog"

    },

    {

      "blogId": "3",
      "lastModified": "2011-01-14T14:!5:54.407Z",
      "created": "2011-01-14",
      "tags": [],
      "author": "Pooja Verma",
      "Category": "Drama",
      "isPublished": true,
      "views": 20,
      "bodyHtml": "This is blog body",
      "description": "This is the third body description",
      "title": "This is third blog"

    }
  ]

  constructor(private blogService:BlogService) {
    console.log("Home componentt constuctor is called");
   }

  ngOnInit() {
    console.log("Home componentt init is called")
  }
  ngOnDestroy() {
    console.log("Home componentt Destroy is called")
  }
}
