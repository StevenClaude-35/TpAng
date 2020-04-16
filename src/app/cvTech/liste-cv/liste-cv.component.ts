import { Component, OnInit, Input, Output } from '@angular/core';
import { Personne } from 'src/app/Model/personne';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.scss']
})
export class ListeCvComponent implements OnInit {
@Input() personnes:Personne[];
@Output() selectedPersonne=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectPersonne(selectedPersonne){
    this.selectedPersonne.emit(selectedPersonne);
  }
}
