import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pages: number[] = []
  page = 1
  
  @Input() displayedPages = 3
  @Input() totalItems!: number
  @Input() pageSize!: number

  @Output() onPageSelection = new EventEmitter<number>()

  totalPages!: number

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize)
    this.pages = this.getNextPages(0)
  }

  selectPage(page: number): void {
    const prev = this.page

    if (!this.pages.includes(page)) {
      if (prev < page) {
        this.pages = this.getNextPages(prev)
      } else {
        this.pages = this.getPreviousPages(prev)
      }
    }

    this.page = page
    this.onPageSelection.emit(page)
  }

  private getPreviousPages(page: number): number[] {
    const pages = []
    const startPage = page - this.displayedPages > 0 ?
    page - this.displayedPages : 1
    for (let i = startPage; i < page; i++) {
      pages.push(i)
    }
    return pages
  }

  private getNextPages(page: number): number[] {
    const pages = []
    const endPage = page + this.displayedPages <= this.totalPages ?
    page + this.displayedPages : this.totalPages
    for (let i = page + 1; i <= endPage; i++) {
      pages.push(i)
    }
    return pages
  }
}
