const getCal = require('ical');

exports.handler = async (event, context, callback) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept'
      },
      body: 'OK'
    };
  }
  const { ical } = JSON.parse(event.body);
  const result = await new Promise((resolve, reject) => {
    getCal.fromURL(ical, {}, (error, result) => {
      if (error) {
        reject(error);
      }

      const events = Object.values(result);

      const sorted = events
        .filter(event => event.end.getTime() > Date.now())
        .sort((a, b) => a.start.getTime() - b.start.getTime());

      resolve(sorted);
    });
  }).catch(error => {
    console.error(error);
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept'
    },
    body: JSON.stringify(result)
  };
};
