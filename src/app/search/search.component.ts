import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';
import {JobService} from '../job.service';

import {NgForm}  from '@angular/forms';
import {Router} from "@angular/router";
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public categories;
  public jobsListing = [];
  public keyword;
  public location = 'null';
  public job_category = 'null';
  public bsearch = false;

  constructor(private categoryService:CategoryService, private router:Router, private route:ActivatedRoute, private jobService:JobService) {

    categoryService.getAllCategories()
      .subscribe(
        data => {
          this.categories = data
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed! ee')
      );
  }

  searchJob(form:NgForm):void {
    console.log(form.value);
    this.router.navigate(['/search', form.value.keywords, form.value.zone_job, form.value.category_job]);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let keyword = params['keywords'] != 'undefined' ? params['keywords'] : null;
      let location = params['zone_job'] != 'undefined' || params['zone_job'] != 'null' ? params['zone_job'] : null;
      let job_category = params['category_job'] != 'undefined' || params['category_job'] != 'null' ? params['category_job'] : null;


      if (keyword || location || job_category) {
        this.bsearch = true;
        this.keyword = keyword;
        this.location = location;
        this.job_category = job_category;
        this.jobService.searchJobs(keyword, location, job_category)
          .subscribe(
            data => {
              this.jobsListing = data
            },
            error => console.error('Error: ' + error),
            () => console.log('Completed! ee')
          );

      }
    });
  }

}
