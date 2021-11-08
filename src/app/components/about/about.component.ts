import { Component, OnInit } from '@angular/core';
import { Contributor } from 'src/app/models/contributor';
import { ContributorService } from 'src/app/services/contributor.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  providers: [ContributorService],
})
export class AboutComponent implements OnInit {
  contributors: Contributor[] = [];

  constructor(private contributorService: ContributorService) {}

  ngOnInit(): void {
    this.contributors = this.contributorService.getContributors();
  }
}
