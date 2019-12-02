import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NewMeme } from './models/new-meme.model';
import { MemesService } from '../../services/memes/memes.service';

@Component({
  selector: 'app-add-meme',
  templateUrl: './add-meme.component.html',
  styleUrls: ['./add-meme.component.sass']
})
export class AddMemeComponent implements OnInit {
  public backgroundImage: SafeStyle;
  public newMeme: NewMeme = {
    picture_title: "",
    blob: "",
    price: 0,
    quantity: 0,
  };

  constructor(private api: MemesService, private sanitizer: DomSanitizer) { }

  ngOnInit() { }

  public addImage(fileInput: HTMLInputElement): void {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.newMeme.blob = reader.result;
      this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url('${this.newMeme.blob}')`);
    }
    reader.readAsDataURL(fileInput.files[0]);
  }
  
<<<<<<< HEAD
  public send(): void {
    this.api.createMeme(this.newMeme).subscribe({
=======
  public send() {
    this.api.createMeme(Object.assign(this.newMeme, {name: "cos"})).subscribe({
>>>>>>> develop
      next: data => console.log(data),
      error: error => console.log(error)
   });
  }
}
