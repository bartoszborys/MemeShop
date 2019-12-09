import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { MemeCard } from './models/meme-card.model';
import { MemesService } from '../../services/memes/memes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MemesParams } from '../../services/memes/models/memes-params.model';

@Component({
  selector: 'app-memes-list',
  templateUrl: './memes-list.component.html',
  styleUrls: ['./memes-list.component.sass']
})
export class MemesListComponent implements OnInit {
  @ViewChild('infinityContainer', {static: false}) public infinityContainer: ElementRef;
  public memes: MemeCard[];
  public params: MemesParams;
  public apiUrlReplacement: string;
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
    this.params = this.route.snapshot.data.params as MemesParams;
    this.apiUrlReplacement = this.route.snapshot.data.api_url as string;
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
    const request: Observable<MemeCard[]> = this.apiUrlReplacement ? this.service.getMemesList(this.params, this.apiUrlReplacement) : this.service.getMemesList(this.params);
    this.memes = this.memes.concat((await request.toPromise()).slice(0,10));
    this.visible.memesChunk = false;
  }
}
