const Express = require('express');
const cors = require('cors');
const getCal = require('ical');
const striptags = require('striptags');

const app = new Express();

app.use(cors());

app.get('/test', (_, res) => res.json({ boop: true }));

app.get('/', (req, res) => {
  const ical = req.query.ical;

  getCal.fromURL(ical, {}, (error, result) => {
    if (error) {
      res.send(500);
      return;
    }

    const events = Object.values(result);

    const sorted = events
      .filter(event => event.end.getTime() > Date.now())
      .sort((a, b) => a.start.getTime() - b.start.getTime())
      .map(event => ({ ...event, description: striptags(event.description) }));

    res.json(sorted);
    return;
  });
});

app.listen(3000, () => console.log('app listening on http://localhost:3000'));
