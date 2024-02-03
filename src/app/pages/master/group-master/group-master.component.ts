import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ColDef } from 'ag-grid-community';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-group-master',
  templateUrl: './group-master.component.html',
  styleUrls: ['./group-master.component.css']
})
export class GroupMasterComponent implements OnInit {
  myForm: FormGroup;
  title: string = "Group Master"
  groupsData: any;
  cols = ['id', 'name'];
  URL: any ="https://localhost:7017/api/Groups/"

  public constructor(private http: HttpClient, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      GroupName: ['', Validators.required],
    });
   }  

  ngOnInit(): void {
    this.getGroup();
  }

  AddGroup(){  
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.URL = this.URL+formData.GroupName
      this.http.post(this.URL,'').subscribe(
        response  => {
          console.log(response)
          this.getGroup();
        }
      )
    }
  }
 
  getGroup(){
    this.http.get(this.URL)
    .subscribe(
      (data) => { 
        console.log(data)
        this.groupsData = data;
      }
    )
  }

  editRow(row: any) {
    // Handle row editing logic here
    console.log('Editing row:', row);
  }
}
