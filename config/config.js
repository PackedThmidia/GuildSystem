module.exports = {
  development: {
    environment: 'development',
    username: 'database_dev',
    password: 'database_dev',
    database: 'database_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    environment: 'test',
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    environment: 'production',
    use_env_variable: `${process.env.SQL_DATABASE}://${process.env.SQL_USER}:${process.env.SQL_PASSWORD}@$127.0.0.1:5432/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
    dialect: 'postgres',
  },
};
