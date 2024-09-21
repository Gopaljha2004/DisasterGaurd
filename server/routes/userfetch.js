app.get('/fetch-user-data', (req, res) => {
    User.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'Failed to fetch user data' });
      });
  });
  