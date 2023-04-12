import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as heading 'Page not found!!'`, () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    const app = fixture.componentInstance;
    expect(h1.textContent).toContain('Page not found!!');
  });
});
