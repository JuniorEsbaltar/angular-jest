import { Component, OnInit } from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  text: string = '';
  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.textService.getText().subscribe((text) => this.text = text);
  }

}
