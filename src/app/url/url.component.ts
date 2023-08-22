import { Component , OnDestroy} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fetchShorterUrl } from '../state/url.actions';
import { UrlState } from '../state/url.reducer';
import { selectFirstUrl, selectSecondUrl } from '../state/url.selectors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  public url: string = "";

  public firstShortUrl$ = this.store.pipe(select(selectFirstUrl), takeUntil(this.destroy$));
  public secondShortUrl$ = this.store.pipe(select(selectSecondUrl), takeUntil(this.destroy$));

  constructor(private store: Store<UrlState>){}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onShorten(): void{
    this.store.dispatch(fetchShorterUrl({ url: this.url }));
  }
}
