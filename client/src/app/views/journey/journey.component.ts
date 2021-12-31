import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { JourneyTabs } from 'src/app/constants/journey-tabs.constant';
import { MapStyles } from 'src/app/constants/map-styles.constant';
import { AddReviewDto } from 'src/app/dtos/add-review.dto';
import { AppState } from 'src/app/store/app.state';
import { addReview, loadJourney } from 'src/app/store/journey/journey.actions';
import { selectJourney, selectReview } from 'src/app/store/journey/journey.selectors';

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
  review$ = this.store.select(selectReview)
  tabs = JourneyTabs
  styles = MapStyles

  formReview = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', [Validators.required, Validators.minLength(12)]],
    ratings: this.fb.group({
      comfort: [null, Validators.required],
      hospitality: [null, Validators.required],
      hygiene: [null, Validators.required],
      reception: [null, Validators.required]
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
      this.store.dispatch(addReview(this.generateReview()))
      this.reviewResetSubject.next()
      this.formReview.reset()
      this.formReview.markAsPristine()
    }
  }

  generateReview(): AddReviewDto {
    return {
      id: this.id,
      review: {
        author: this.formReview.value.name,
        content: this.formReview.value.comment,
        scores: Object.keys(this.formReview.value.ratings).map(attribute => ({
          attribute: attribute,
          rating: this.formReview.value.ratings[attribute]
        })),
        timestamp: Date.now()
      }
    }
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formReview.controls
  }
}