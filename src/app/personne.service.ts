import { Injectable } from '@angular/core';
import { Personne } from './Model/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  pers:Personne[]=[
    new Personne(1,'Raviart','Myriam',36,'rotating_card_profile.png',7777,'ASS'),
    new Personne(2,'Dupont','Eric',32,'rotating_card_profile2.png',6666,'Teacher'),
    new Personne(3,'Douglas','Lance',43,'rotating_card_profile3.png',5555,'Finacial'),
    

  ]

  constructor() { }
  getPersonne(){
    return this.pers;
  }
  
}
