import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { MemeCard } from './models/meme-card.model';
import { MemesService } from '../../services/memes/memes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-memes-list',
  templateUrl: './memes-list.component.html',
  styleUrls: ['./memes-list.component.sass']
})
export class MemesListComponent implements OnInit {
  @ViewChild('infinityContainer', {static: false}) public infinityContainer: ElementRef;
  public memes: MemeCard[];
  public memesLoading: Observable<MemeCard[]>;
  public visible: {filter: boolean, memesChunk: boolean} = {
    filter: false,
    memesChunk: false,
  }

  constructor(
    private service: MemesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.memes = this.route.snapshot.data.memes;
    this.memes.forEach( item => item.url = environment.api_url + item.url.replace(/\/pictures/g,"") )
  }

  scroll(): void {
    const container: HTMLTableSectionElement = this.infinityContainer.nativeElement;
    if (Math.ceil(container.offsetHeight + container.scrollTop) >= container.scrollHeight * 0.90) {
      this.memesChunkLoad();
    }
  }

  memesFill(): void {
    const container: HTMLTableSectionElement = this.infinityContainer.nativeElement;
    if (container.offsetHeight + container.scrollTop == container.scrollHeight) {
      this.memesChunkLoad();
    }
  }

  async memesChunkLoad(): Promise<void> {
    if(this.visible.memesChunk){
      return;
    }

    this.visible.memesChunk = true;
    this.memes = this.memes.concat((await this.service.getMemesList().toPromise()).slice(0,10));
    this.visible.memesChunk = false;
  }
}
