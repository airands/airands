import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";
import {NavController, Platform} from "@ionic/angular";
import {BehaviorSubject} from "rxjs";
import {CustomerDto, CustomersService, PhoneConfirmation, SessionService, UserDto} from "../../../open_api";
import {User} from "../../models/user/user.model";
import {Customer} from "../../models/customer/customer.model";
import {LoginService} from "./login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    authUser: BehaviorSubject<User> = new BehaviorSubject(null);
    customer: BehaviorSubject<Customer> = new BehaviorSubject(null);

    constructor(
        private navController: NavController,
        private storage: Storage,
        private platform: Platform,
        private sessionService: SessionService,
        private customersService: CustomersService,
        private loginService: LoginService,
    ) {
    }

    isAuthenticated(): boolean {
        return Boolean(this.customer.value);
    }

    async verifyLogin(): Promise<boolean> {
        try {
            this.setCustomer(await this.customersService.getUser().toPromise());
            return true;
        } catch (error) {
            this.setCustomer(null);
            return false;
        }
    }

    logout() {
        this.sessionService.logout().toPromise().finally(() => {
            this.setCustomer(null);
        });
    }

    setCustomer(dto: CustomerDto): void {
        if (!dto) {
            this.customer.next(null);
        } else {
            this.customer.next(new Customer(dto));
        }
    }

    async login(phoneConfirmation: PhoneConfirmation): Promise<UserDto> {
        return new Promise((resolve, reject) => {
            this.sessionService.authenticate(phoneConfirmation).subscribe(
                (userDto) => {
                    this.setUser(userDto);
                    resolve(userDto);
                },
                (error) => reject(error),
            );
        });
    }

    setUser(userDto: UserDto): void {
        if (!userDto) {
            this.authUser.next(null);
        } else {
            this.authUser.next(new User(userDto));
        }
    }

}
