import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onPost(id: string) {
    this.router.navigate( ['/post', id]);
  }
}
