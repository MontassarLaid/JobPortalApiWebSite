import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {JobService} from "../job.service";
import {CategoryService} from '../category.service';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  form:FormGroup;
  categories;
  job={
    id:"",
    title:"",
    description:"",
    type_job:"",
    experience:"",
    salary:"",
    category: {name : ""},
    company : {name : "", location: ""},
  };

  constructor(fb:FormBuilder, private jobService:JobService, private categoryService:CategoryService, private router:Router, private route:ActivatedRoute) {
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['Id'] ;

        this.jobService.getJob(id)
          .subscribe(
            data => {
              this.job = data;
              console.log( this.job);
              this.form.controls['title'].setValue(this.job.title);
              this.form.controls['description'].setValue(this.job.description);
              this.form.controls['experience'].setValue(this.job.experience);
              this.form.controls['type_job'].setValue(this.job.type_job);
              this.form.controls['salary'].setValue(this.job.salary);
              this.form.controls['company_name'].setValue(this.job.company.name);
              this.form.controls['company_location'].setValue(this.job.company.location);
            },
            error => console.error('Error: ' + error),
            () => console.log('Completed! ee')
          );
    });
  }

  editJob(model:any, isValid:boolean) {
    if (isValid) {
      this.jobService.editJob(model, this.job.id).subscribe(
        data => {
          this.router.navigate(['/jobs']);
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );

    }
  };

}
