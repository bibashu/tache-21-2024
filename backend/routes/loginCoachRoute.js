router.get('/login', (req, res) => {
    res.render('login');
  });
  
  router.post('/login', async (req, res) => {
    // Logique d'authentification ici
  });