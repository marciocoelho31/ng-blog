import { CommentsDataService } from './../services/comments-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comments } from '../interfaces/comments.interface';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {

  commentForm: FormGroup;

  constructor(private commentsDataService: CommentsDataService) {
    this.commentForm = new FormGroup({
      commentTxt: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  ngOnInit(): void {
  }

  sendForm() {

    const comentario : Comments = {
      createdAt: '',
      userId: 123,
      postId: 123,
      comment: this.commentForm.value.commentTxt
    }

    this.commentsDataService
      .postComment(comentario)
      .subscribe((r) => console.log(r));

  }

}
