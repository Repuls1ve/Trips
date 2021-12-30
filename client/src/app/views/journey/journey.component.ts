import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { JourneyTabs } from 'src/app/constants/journey-tabs.constant';
import { MapStyles } from 'src/app/constants/map-styles.constant';
import { AppState } from 'src/app/store/app.state';
import { loadJourney } from 'src/app/store/journeys/journeys.actions';
import { selectJourney } from 'src/app/store/journeys/journeys.selectors';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {
  id = this.route.snapshot.params['id']
  reviewsPage = 1
  reviewsPageSize = 3

  journey$ = this.store.select(selectJourney)
  tabs = JourneyTabs
  styles = MapStyles

  formReview = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', [Validators.required, Validators.minLength(12)]],
    ratings: this.fb.group({
      comfort: [0, Validators.required],
      hospitality: [0, Validators.required],
      hygiene: [0, Validators.required],
      reception: [0, Validators.required]
    })
  })

  reviewResetSubject = new Subject<void>()

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>,
    private readonly fb: FormBuilder,
    public readonly media: MediaObserver
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadJourney({id: this.id}))
  }

  changePage(page: number): void {
    this.reviewsPage = page
  }

  onReviewSubmit(): void {
    this.formReview.markAsDirty()
    if (this.formReview.valid) {
      console.warn('Submitted!', this.formReview.value)
      this.reviewResetSubject.next()
      this.formReview.reset()
      this.formReview.markAsPristine()
    }
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formReview.controls
  }
}