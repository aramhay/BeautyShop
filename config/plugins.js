


  module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultFrom: 'mankuyanars@gmail.com',
        defaultReplyTo: 'mankuyanars@gmail.com',
      },
    },
    
  });


  // module.exports = ({ env }) => ({
  //   // ...
  //   upload: {
  //     provider: 'cloudinary',
  //     providerOptions: {
  //       cloud_name: env('CLOUDINARY_NAME'),
  //       api_key: env('CLOUDINARY_KEY'),
  //       api_secret: env('CLOUDINARY_SECRET'),
  //     },
  //   },
  //   // ...
  // });