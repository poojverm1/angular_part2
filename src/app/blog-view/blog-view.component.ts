import { Component, OnInit, OnDestroy } from '@angular/core';
//import route related code
import {ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy{

  public currentBlog;
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
      "bodyHtml": "<h1>This is blog body</h1><p>start blogging</p>",
      "description": "This is the firstbody description",
      "title": "This is first blog"

    },

    {

      "blogId": "2",
      "lastModified": "2018-12-14",
      "created": "2018-12-14",
      "tags": ["Humor","StandUp"],
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


  constructor(private _route:ActivatedRoute,private router:Router) {
console.log("constructor is called");
   }

   ngOnDestroy():void{
    console.log("Destroy from blog view is called");
   }

  ngOnInit() {
    console.log("nginit from blog view is called");

    //get blog id from
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.getSingleInformation(myBlogId);
  }

  public getSingleInformation(currentBlogId):any{

    for (let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
      this.currentBlog = blog;
     
    }
  }
  console.log(this.currentBlog);

}
}