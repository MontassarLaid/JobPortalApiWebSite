import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {JobService} from "../job.service";
import {CategoryService} from '../category.service';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  form:FormGroup;
  categories;

  constructor(fb:FormBuilder, private jobService:JobService, private categoryService:CategoryService, private router:Router) {
    this.form = fb.group({
      "title": ["", Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])],
      "description": ["", Validators.required],
      "experience": ["", Validators.required],
      "type_job": ["", Validators.required],
      "salary": ["", Validators.required],
      "company_name": ["", Validators.required],
      "company_location": ["", Validators.required],
    })


    categoryService.getAllCategories()
      .subscribe(
        data => {
          this.categories = data
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed! ee')
      );
  };

  addJob(model:any, isValid:boolean) {
    if (isValid) {
      console.log("model controller");
      console.log(model);
      this.jobService.createJob(model).subscribe(
        data => {
          this.router.navigate(['/jobs']);
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );

    }
  };


  ngOnInit() {
  }

}
