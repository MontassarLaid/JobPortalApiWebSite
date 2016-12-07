import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobsList = [];
  
  constructor(private jobService:JobService) {
      jobService.getJobs()
          .subscribe(
              data => {
                  this.jobsList = data;
              },
              error => console.error('Error: ' + error),
              () => console.log('Completed!')
          );
  }

  ngOnInit() {

  }

}
