import { ProvidersEnum } from '@/utils/constants';

import { User } from './user.entity';

export const userProviders = [
  {
    provide: ProvidersEnum.USER,
    useValue: User,
  },
];
