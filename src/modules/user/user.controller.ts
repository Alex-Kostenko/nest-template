import {
  Controller,
  Get,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { GoogleOauthGuard } from '../../guards/google-oauth.guard';
import { GoogleAuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(private readonly googleAuthService: GoogleAuthService) {}

  @Get('auth/google')
  @UseGuards(GoogleOauthGuard)
  //eslint-disable-next-line  @typescript-eslint/no-empty-function
  async login() {}

  @Get('auth/google/redirect')
  @UseGuards(GoogleOauthGuard)
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    const token = await this.googleAuthService.signIn(req.user);

    res.cookie('access_token', token, {
      maxAge: 2592000000,
      sameSite: true,
      secure: false,
    });

    return res.status(HttpStatus.OK);
  }
}
