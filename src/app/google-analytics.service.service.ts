import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsServiceService {

  trackEvent(eventName: string, eventCategory: string, eventAction: string, eventLabel?: string) {
    gtag('event', eventName, {
      event_category: eventCategory,
      event_action: eventAction,
      event_label: eventLabel
    });
  }

  trackPageView(url: string) {
    gtag('config', 'G-FFS92D84V1', { 'page_path': url });
  }
}
