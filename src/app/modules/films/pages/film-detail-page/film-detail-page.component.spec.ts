import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailPageComponent } from './film-detail-page.component';

describe('FilmDetailPageComponent', () => {
  let component: FilmDetailPageComponent;
  let fixture: ComponentFixture<FilmDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [FilmDetailPageComponent]
});
    fixture = TestBed.createComponent(FilmDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
