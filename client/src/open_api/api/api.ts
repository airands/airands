export * from './customers.service';
import { CustomersService } from './customers.service';
export * from './profile.service';
import { ProfileService } from './profile.service';
export * from './session.service';
import { SessionService } from './session.service';
export const APIS = [CustomersService, ProfileService, SessionService];
