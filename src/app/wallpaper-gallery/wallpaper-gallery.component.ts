import { Component, ElementRef, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-wallpaper-gallery',
  templateUrl: './wallpaper-gallery.component.html',
  styleUrls: ['./wallpaper-gallery.component.css']
})
export class WallpaperGalleryComponent {
  wallpapers: string[] = [
    'assets\\Aquarium_001.png',
    'assets\\Aquarium_002.png',
    'assets\\Aquarium_003.png',
    'assets\\Capture.PNG',
    'assets\\bottle_007.jpg',
    'assets\\bottle_forest_017.jpg',
    'assets\\Capture.PNG',
    'assets\\break_009.jpg',
    'assets\\vertical_globes_002.jpg',
    'assets\\break_025.jpg',
    'assets\\break_047.jpg',
    'assets\\vertical_globes_017.jpg',
    'assets\\vertical_globes_018.jpg',
    'assets\\vertical_globes_019.jpg',
    'assets\\vertical_globes_020.jpg',
    'assets\\vertical_globes_021.jpg',
    'assets\\vertical_globes_024.jpg',
    'assets\\vertical_globes_025.jpg',
    'assets\\fruit_bird_055.jpg',
    'assets\\fruit_bird_003.jpg',
    'assets\\mtfuji_059.jpg'
  ];
  imagesPerRow = 3; // Change this to the desired number of images per row
  @ViewChild('hiddenImage') hiddenImage!: ElementRef;

  constructor(private dialog: MatDialog) {}

  openImageDialog(imageUrl: string): void {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const resolution = `${img.naturalWidth} x ${img.naturalHeight}`;
      this.dialog.open(ImageDialogComponent, {
        width: 'auto',
        panelClass: 'image-dialog-panel',
        data: {
          imageUrl: imageUrl,
          resolution: resolution
        }
      });
    };
  }


  getImagesForRow(startIndex: number): string[] {
    return this.wallpapers.slice(startIndex, startIndex + this.imagesPerRow);
  }

    // Optional method to fetch image resolution using hidden image element
  getImageResolution(imageUrl: string): string {
    this.hiddenImage.nativeElement.src = imageUrl;
    return `${this.hiddenImage.nativeElement.naturalWidth} x ${this.hiddenImage.nativeElement.naturalHeight}`;
  }
}
