import { User } from './../schema/User';
import { UserService } from './user.service';
import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async setUser(@Body() body: User) {
        try {
            return await this.userService.setUser(body);
        } catch (error) {
            throw new HttpException(
                {
                  status: HttpStatus.BAD_REQUEST,
                  error: error,
                },
                HttpStatus.BAD_REQUEST,
              );
        }
    }
}
