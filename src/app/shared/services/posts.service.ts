import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts : Post[] = [{
    id: '1',
    title: 'Nosso primeiro post',
    category: 'Tech',
    likes: 123,
    tags: ['tag1', 'tag2']
  }, {
    id: '2',
    title: 'Nosso segundo post',
    category: 'Arts',
    likes: 321
  }, {
    id: '3',
    title: 'Nosso terceiro post',
    category: 'Tech',
    likes: 44
  }, {
    id: '4',
    title: 'Nosso quarto post',
    category: 'Movies',
    likes: 1
  }]

  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(postId: string | null): Post | undefined {
    return this.posts.find(post => post.id === postId);
  }

}
