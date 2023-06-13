import { Express, Request, Response } from "express";
import { User } from "../types/user";

export class UsersController {
   users: User[] = [
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
			email: 'jas@gmail.com',
			number: '141424'
		},
		{
			email: 'jill@gmail.com',
			number: '822287'
		},
		{
			email: 'jil@gmail.com',
			number: '822286'
		}
	];


   public async getAll(req: Request, res: Response): Promise<Response<any, Record<string, string>>> {

		
      const params = req.query as {email: string; number?: string};
      if (params) {
         return this.getByParams(req, res);
      }
      return res.json({users: this.users});
   }

   private async getByParams(req: Request, res: Response): Promise<Response<any, Record<string, string>>> {
      const {email, number} = req.query as {email: string; number?: string};
      const filteredusers = this.users.filter(usr => usr.email.includes(email || '') && usr.number.includes(number || ''));
      return res.json({users: filteredusers});
   }
}