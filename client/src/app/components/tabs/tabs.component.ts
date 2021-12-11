import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>

  ngAfterContentInit(): void {
    //Find an alternative solution without setTimeout
    setTimeout(() => {
      const activeTabs = this.tabs.filter(tab => tab.active)
      if (!activeTabs.length) {
        this.selectTab(this.tabs.first)
      }
    }, 0)
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => tab.active = false)
    tab.active = true
  }
}
