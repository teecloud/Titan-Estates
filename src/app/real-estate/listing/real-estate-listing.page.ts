import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RealEstateItemModel, RealEstateListingModel } from './real-estate-listing.model';
import { switchMap } from 'rxjs/operators';
import { ResolverHelper, IResolvedRouteData } from '../../utils/resolver-helper';

@Component({
  selector: 'app-real-estate-listing',
  templateUrl: './real-estate-listing.page.html',
  styleUrls: [
    './styles/real-estate-listing.page.scss',
    './styles/real-estate-listing.shell.scss'
  ]
})
export class RealEstateListingPage implements OnInit {
  listing: RealEstateListingModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data
    .pipe(
      // Extract data for this page
      switchMap((resolvedRouteData: IResolvedRouteData<RealEstateListingModel>) => {
        return ResolverHelper.extractData<RealEstateListingModel>(resolvedRouteData.data, RealEstateListingModel);
      })
    )
    .subscribe({
      next: (state) => {
        this.listing = state;
      },
      error: (error) => console.log(error)
    });
  }

  likeClicked(item: RealEstateItemModel){
    item.liked = !item.liked
  }
}
