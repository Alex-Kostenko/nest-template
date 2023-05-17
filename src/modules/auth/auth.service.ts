import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ProvidersEnum } from '@/utils/constants';

import { User } from '../user/entity/user.entity';

@Injectable()
export class GoogleAuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(ProvidersEnum.USER)
    private userRepository: typeof User,
  ) {}

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  async signIn(googleUser: any) {
    if (!googleUser) {
      throw new BadRequestException('Unauthenticated');
    }

    const [user] = await this.userRepository.findOrCreate({
      where: { googleId: googleUser.id },
      defaults: googleUser,
    });

    return this.generateJwt({
      sub: user.googleId,
      email: user.email,
    });
  }

  async findUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    return user;
  }
}
