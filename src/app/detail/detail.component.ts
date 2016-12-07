import {Component, OnInit} from '@angular/core';
import { JobService } from '../job.service';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public job ;

  constructor(private jobService:JobService,private route:ActivatedRoute) {

  }

  ngOnInit() {
    //this.Id = this.route.snapshot.params['Id'];
    this.route.params.subscribe(params => {
      let id = params['Id'];

     this.jobService.getJob(id).subscribe(
        data => {
          this.job = data;
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
   });
  }

}
