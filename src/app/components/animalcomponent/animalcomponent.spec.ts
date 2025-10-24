import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animalcomponent } from './animalcomponent';

describe('Animalcomponent', () => {
  let component: Animalcomponent;
  let fixture: ComponentFixture<Animalcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animalcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animalcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
