import { Component, OnInit } from '@angular/core';
import { MissionService } from './../mission.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  missions: any;
  years: any = [];
  launch: any = [];
  selectedYear: number;
  selectedLaunch: boolean;
  selectedLanding: boolean;
  missionUrl: string = "https://api.spacexdata.com/v3/launches?";
  params: any;
  limit: number = 100;

  constructor(private missionService: MissionService) {
    this.params = new URLSearchParams();
  }

  ngOnInit() {
    this.years = [
      { year: 2006 },
      { year: 2007 },
      { year: 2008 },
      { year: 2009 },
      { year: 2010 },
      { year: 2011 },
      { year: 2012 },
      { year: 2013 },
      { year: 2014 },
      { year: 2015 },
      { year: 2016 },
      { year: 2017 },
      { year: 2018 },
      { year: 2019 },
      { year: 2020 }
    ];
    this.launch = [
      { value: true },
      { value: false }
    ]
    this.params.set('limit', this.limit);
    this.getMissions();
  }

  getMissions() {
    this.missionService.getMissions(this.missionUrl + this.params)
      .subscribe(missions => this.missions = missions);
  }

  filterMission(criteria, filterVal) {
    if (criteria === 'year') {
      this.selectedYear = filterVal;
      this.params.set('launch_year', filterVal);
    }
    if (criteria === 'launch') {
      this.selectedLaunch = filterVal;
      this.params.set('launch_success', filterVal);
    }
    if (criteria === 'landing') {
      this.selectedLanding = filterVal;
      this.params.set('land_success', filterVal);
    }
    this.getMissions();
  }

}
