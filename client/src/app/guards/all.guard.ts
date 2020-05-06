import {Injectable, Injector} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllGuard implements CanActivate {

  constructor(private injector: Injector) {
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const guards = route.data.guards || [];
    for (const guard of guards) {
      const instance: CanActivate = this.injector.get(guard);
      const result = await instance.canActivate(route, state);
      if (result === false || result instanceof UrlTree) {
        return result;
      }
    }
    return true;
  }
  
}
