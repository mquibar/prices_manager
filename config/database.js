module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI','mongodb+srv://pricemanager:vnt0TGBOeK6mkzps@price-manager.mfl3pjr.mongodb.net/?retryWrites=true&w=majority')
      },
      options: {
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
