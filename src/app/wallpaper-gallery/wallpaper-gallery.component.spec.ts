import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpaperGalleryComponent } from './wallpaper-gallery.component';

describe('WallpaperGalleryComponent', () => {
  let component: WallpaperGalleryComponent;
  let fixture: ComponentFixture<WallpaperGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallpaperGalleryComponent]
    });
    fixture = TestBed.createComponent(WallpaperGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
