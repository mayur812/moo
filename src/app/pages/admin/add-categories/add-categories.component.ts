import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { title } from 'process';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  category={
    title:'',
    description:''
  }

  constructor(private categoryService:CategoryService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit() {
    this.categoryService.addCategory(this.category).subscribe(
      (data:any) => {
        if (data.error != null) {
          this.snack.open(data.error,'Ok!',{
            duration:5000,
          })
        } else {
          this.snack.open("Category Added Successfully",'Ok!',{
            duration:5000,
          })
        }
      },
      (error) => {
        this.snack.open("Something went wrong",'',{
          duration:3000,
        })
      }
    );
  }

}
