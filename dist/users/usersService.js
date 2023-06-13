"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
class UsersService {
    constructor() {
        this.users = [
            {
                email: 'jim@gmail.com',
                number: '221122'
            },
            {
                email: 'jam@gmail.com',
                number: '830347'
            },
            {
                email: 'john@gmail.com',
                number: '221122'
            },
            {
                email: 'jams@gmail.com',
                number: '349425'
            },
            {
                email: 'jams@gmail.com',
                number: '141424'
            },
            {
                email: 'jill@gmail.com',
                number: '822287'
            },
            {
                email: 'jill@gmail.com',
                number: '822286'
            }
        ];
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return { data: 'ergae' };
        });
    }
    getByParams(email, number) {
        return __awaiter(this, void 0, void 0, function* () {
            const sortedUsers = this.users.filter((usr) => {
                if (number &&
                    usr.email.includes(email) &&
                    usr.number.includes(number)) {
                    return usr;
                }
                else if (!number && usr.email.includes(email)) {
                    return usr;
                }
            });
            return { users: sortedUsers };
        });
    }
}
exports.UsersService = UsersService;
