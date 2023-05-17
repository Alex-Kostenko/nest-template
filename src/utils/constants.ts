export enum ProvidersEnum {
  SEQUELIZE = 'SEQUELIZE',
  USER = 'USER_REPOSITORY',
  JWT = 'JWT_REGISTER_OPTIONS',
}

export const successLoginUrl = `${process.env.FRONTEND_URL}/login/success`;
export const errorLoginUrl = `${process.env.FRONTEND_URL}/login/error`;
