import { Injectable, Inject } from '@nestjs/common';

import { ProvidersEnum } from '@/utils/constants';

import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(ProvidersEnum.USER)
    private userRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }

  async user(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }
}
