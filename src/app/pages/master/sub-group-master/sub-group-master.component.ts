import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-group-master',
  templateUrl: './sub-group-master.component.html',
  styleUrls: ['./sub-group-master.component.css']
})
export class SubGroupMasterComponent implements OnInit {

  constructor(private http : HttpClient){}
  title : string = 'Sub-Group Master';
  SubGroupData : any;
  cols = ['id','subGroupName','groupId','groupName']


  ngOnInit(): void {
    this.http.get("https://localhost:7017/api/SubGroups")
    .subscribe(
      (GetSubGroups)=>{
        this.SubGroupData=GetSubGroups;
      }
    )
  }

}
