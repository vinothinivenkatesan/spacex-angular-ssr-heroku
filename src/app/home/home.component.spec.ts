import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MissionService } from '../mission.service';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call filterMission method', () => {
    const onClickMock = spyOn(component, 'filterMission');
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should call getMissions method on init', () => {
    const componentSpy = spyOn(component, 'getMissions').and.callThrough();
    expect(componentSpy).not.toHaveBeenCalled();
    component.ngOnInit();
    expect(componentSpy).toHaveBeenCalled();
  });
});
