import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AnimalService } from '../../service/animal-service';
import { take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from 'express';

@Component({
  selector: 'app-animalcomponent',
  imports: [FormsModule],
  templateUrl: './animalcomponent.html',
  styleUrl: './animalcomponent.css',
  
})
export class Animalcomponent {
    animalList:any= [];
    animalForm: FormGroup | any;

  constructor(private animalService:AnimalService, private toastr: ToastrService, private router: Router, private formBuilder: FormBuilder ) {}
  
  getAllAnimals() {
      this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList=data;
    });
  }
  ngOnInit() {
   this.animalForm = this.formBuilder.group({
      nombre: '',
      edad: 0,
      tipo: ''
    })
    this.getAllAnimals();
  }

  newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
  }


}
