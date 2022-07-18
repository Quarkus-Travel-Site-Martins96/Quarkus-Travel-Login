import { Injectable } from '@angular/core';

const COOKIE_CONSENT: string= 'allowed-cookie-banner';
const COOKIE_CONSENT_EXPIRE_DAYS: number= 180;


@Injectable({
	providedIn: 'root'
})
export class CookieManager {
    private isConsented: boolean = false;

    constructor() {
        this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }

    public getCookie(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = `${name}=`;
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return null;
    }

    public deleteCookie(name: string) {
        this.setCookie(name, '', -1);
    }

    public setCookie(name: string, value: string, expireDays: number, path: string = '') {
        let d:Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires:string = `expires=${d.toUTCString()}`;
        let cpath:string = path ? `; path=${path}` : '';
        const temp = location.host.split('.').reverse();
        let domain:string = "domain=";
        if (temp && temp.length > 1)
            domain += '.' + temp[1] + '.' + temp[0];
        else
            domain += '.' + temp[0];
        domain = domain.split(':')[0];
        document.cookie = `${name}=${value}; ${domain}; ${expires}${cpath}`;
    }

    public consent(isConsent: boolean, e: any) {
        if (!isConsent) {
            return this.isConsented;
        } else if (isConsent) {
            this.setCookie(COOKIE_CONSENT, '1', COOKIE_CONSENT_EXPIRE_DAYS);
            this.isConsented = true;
            e.preventDefault();
        }
    }
}