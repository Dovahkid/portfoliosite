import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  repos: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {

    this._http.getRepos().subscribe(data => {

      this.repos = data;
      console.log(this.repos);

    });

  }

}
