import { Directive, AfterViewInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Directive({
  selector: '[appNavigationAnnouncer]'
})
export class NavigationAnnouncerDirective implements AfterViewInit {

  constructor(
    private liveAnnouncer: LiveAnnouncer
  ) { }

  ngAfterViewInit() {
    const header = document.querySelector('h2')?.textContent;
    if (header) {
      this.liveAnnouncer.announce(`Location: ${header}`, 'assertive', 10000);
    }
  }
}
