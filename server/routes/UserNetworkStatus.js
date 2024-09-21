
app.post('/update-network-status', (req, res) => {
  const userId = req.body.userId;
  const onlineStatus = req.body.onlineStatus;

  UserNetworkStatus.findOneAndUpdate(
    { userId },
    { onlineStatus, lastUpdated: Date.now() },
    { upsert: true } // Create the document if it doesn't exist
  )
  .then(() => {
    res.json({ message: 'Network status updated successfully' });
  })
  .catch(err => {
    res.status(500).json({ error: 'Error updating network status' });
  });
});

