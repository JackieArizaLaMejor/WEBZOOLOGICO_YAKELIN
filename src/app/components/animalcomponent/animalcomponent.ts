import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../../service/animal-service';

@Component({
  selector: 'app-animalcomponent',
  imports: [FormsModule],
  templateUrl: './animalcomponent.html',
  styleUrl: './animalcomponent.css',
  
})
export class Animalcomponent {
    animalList:any= [];
  constructor(private animalService:AnimalService) {}
  
  getAllAnimals() {
      this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList=data;
    });
  }
  ngOnInit() {
    this.getAllAnimals();
  }


}
