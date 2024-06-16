import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {

  categories:any;

  constructor(private categoryService:CategoryService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.categoryService.categories().subscribe(
      (data:any) => {
        this.categories=data;
      },
      (error) => {
        this.snack.open("Something went wrong, Please log out and log in again","",{duration:4000});
      }
    )
  }
}
