import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Model/personne';
import { PersonneService } from 'src/app/personne.service';


@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.scss']
})
export class ItemCvComponent implements OnInit {
  
@Input() personne:Personne;

@Output() selectedPersonne=new EventEmitter();
  constructor(private servicePersonne:PersonneService) { }

  ngOnInit(): void {
  }

  selectPersonne(){
    
    this.selectedPersonne.emit(
      this.personne
    )
  }

}
