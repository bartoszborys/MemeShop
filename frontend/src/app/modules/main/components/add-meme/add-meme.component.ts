import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NewMeme } from './models/new-meme.model';
import { MemesService } from '../../services/memes/memes.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-meme',
  templateUrl: './add-meme.component.html',
  styleUrls: ['./add-meme.component.sass']
})
export class AddMemeComponent implements OnInit {
  public backgroundImage: SafeStyle;
  public newMeme: NewMeme = {
    name: "",
    extension: "",
    blob: "",
    price: 0,
    quantity: 0,
  };

  constructor(
    private api: MemesService, 
    private sanitizer: DomSanitizer,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() { }

  public addImage(fileInput: HTMLInputElement): void {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.newMeme.blob = reader.result;
      this.newMeme.extension = fileInput.files[0].name.split('.')[1];
      this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url('${this.newMeme.blob}')`);
    }
    reader.readAsDataURL(fileInput.files[0]);
  }
  
  public send() {
    this.api.createMeme(this.newMeme).subscribe({
      next: data => this.router.navigate(['/my-memes']),
      error: data => this.snackBar.open('Mem nie mógł zostać dodany', 'X', {duration: 5000}),
   });
  }
}
