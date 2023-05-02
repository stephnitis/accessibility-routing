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
    const header = document.querySelector('h2')
    const headerText = header?.textContent;
    if (header) {
      header.focus();
      this.liveAnnouncer.announce(`Location: ${headerText}`, 'assertive', 10000);
    }

  }
}
