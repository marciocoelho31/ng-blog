import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() title : string = '';
  @Input() ano : string = '';
  @Input() acessos : number = 0;
  @Input() likes : number = 0;

  @Output() emiteLikes = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  adicionaLikes() {
    this.likes++;
    this.emiteLikes.emit(this.likes);
  }

}
