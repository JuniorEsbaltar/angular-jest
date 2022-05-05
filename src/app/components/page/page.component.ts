import { Component, OnInit } from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  text: string = '';
  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.textService.getText().subscribe((text) => this.text = text);
  }

  onChangeText(text: string) {
    this.textService.setText(text);
  }

}
