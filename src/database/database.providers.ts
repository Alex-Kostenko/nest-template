import { Sequelize } from 'sequelize-typescript';

import { User } from '@/modules/user/entity/user.entity';
import { ProvidersEnum } from '@/utils/constants';

export const databaseProviders = [
  {
    provide: ProvidersEnum.SEQUELIZE,
    useFactory: async () => {
      try {
        const sequelize = new Sequelize({
          dialect: 'postgres',
          host: process.env.DB_HOST || 'localhost',
          port: 3306,
          username: process.env.DB_USER,
          password: process.env.DB_PASS,
          database: process.env.DB_NAME,
        });
        sequelize.addModels([User]);

        await sequelize.sync();

        await sequelize.authenticate();
        // eslint-disable-next-line no-console
        console.log('Connection has been established successfully.');
        return sequelize;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Unable to connect to the database: \n', error);
      }
    },
  },
];
