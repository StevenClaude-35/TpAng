import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/personne';
import { PersonneService } from 'src/app/personne.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  personnes: Personne[]=[];
  selectedPersonne:Personne;

  constructor(private personneService:PersonneService) { }

  ngOnInit(): void {
    this.personnes= this.personneService.getPersonne();
    
  }
  selectPersonne(personne){
    this.selectedPersonne=personne;
  }

}
