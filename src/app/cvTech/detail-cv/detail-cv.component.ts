import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/Model/personne';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.scss']
})
export class DetailCvComponent implements OnInit {

  @Input() personne:Personne;
  constructor() { }

  ngOnInit(): void {
  }

}
