import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-scale',
  templateUrl: './rating-scale.component.html',
  styleUrls: ['./rating-scale.component.scss']
})
export class RatingScaleComponent implements OnInit {
  marks: boolean[] = []
  @Input() rating = 3.5

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      if (i < this.rating) {
        this.marks.push(true)
      }
      else {
        this.marks.push(false)
      }
    }
    this.marks = this.marks.reverse()
  }
}
