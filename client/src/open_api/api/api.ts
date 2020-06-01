export * from './accounts.service';
import { AccountsService } from './accounts.service';
export * from './customers.service';
import { CustomersService } from './customers.service';
export * from './orders.service';
import { OrdersService } from './orders.service';
export * from './session.service';
import { SessionService } from './session.service';
export const APIS = [AccountsService, CustomersService, OrdersService, SessionService];
