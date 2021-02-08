import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MissionService } from './mission.service';

describe('MissionService', () => {
  let service: MissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return data", () => {
    let result;
    let url = 'https://api.spacexdata.com/v3/launches?limit=100';
    service.getMissions(url).subscribe(data => {
     result = data;
    });
    expect(result).toBeGreaterThan(0);
  });


});
