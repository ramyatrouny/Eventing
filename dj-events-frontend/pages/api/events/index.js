const { events } = require('./data.json');

export default (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
    return;
  }

  res.status(200).json(events);
}
