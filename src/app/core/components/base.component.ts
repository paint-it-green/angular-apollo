import { HostListener, Injectable, Injector, OnDestroy } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { GenericRecord } from "../interfaces/common.interface";

@Injectable()
export class BaseComponent implements OnDestroy {

    loading = true;

    protected activeRoute: ActivatedRoute;
    protected router: Router

    private _subscription = new Subscription();

    constructor(protected injector: Injector) {

      this.activeRoute = this.injector.get(ActivatedRoute);
      this.router = this.injector.get(Router);

    }

    @HostListener('unloaded')
    ngOnDestroy(): void {
      this._subscription.unsubscribe();
    }
    
    navigate(
      path: Array<string | number>,
      options?: Partial<NavigationExtras>,
    ): void {
      this.router.navigate(path, {
        relativeTo: this.activeRoute,
        ...options,
      });
    }

    navigateToCharacters(params: Params): void {
        this.navigate(['/characters'], {queryParams: params});
    }

    navigateToEpisodes(params: Params): void {
        this.navigate(['/episodes'], {queryParams: params});
    }

    navigateToLocations(params: Params): void {
        this.navigate(['/locations'], {queryParams: params});
    }

    trackByFn<Record extends GenericRecord>(index: number, item: any): number {
        return item.id || index;
    }

    set subscription(subscription: Subscription) {
      this._subscription.add(subscription);
    }

}