import { Component, Input } from '@angular/core';
import { IJourneysPackageStats } from 'src/app/models/journey.model';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent {
  @Input() packageStats!: IJourneysPackageStats
}
