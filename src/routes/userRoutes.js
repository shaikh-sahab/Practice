import express from 'express';
const router = express.Router();

router.get('/route', async (req, res) => {
  try {
    console.log('GET /users route called');
    const users = await req.context.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});

router.get('/route:id', async (req, res) => {
  try {
    console.log('GET /users/:id route called with id:', req.params.id);
    const user = await req.context.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).send('Error fetching user');
  }
});

router.post('/route', async (req, res) => {
  try {
    console.log('POST /users route called');
    const newUser = await req.context.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

router.put('/route:id', async (req, res) => {
  try {
    console.log('PUT /users/:id route called with id:', req.params.id);
    const updatedUser = await req.context.updateUser(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send('Error updating user');
  }
});

router.delete('/route:id', async (req, res) => {
  try {
    console.log('DELETE /users/:id route called with id:', req.params.id);
    await req.context.deleteUser(req.params.id);
    res.send('User deleted');
  } catch (error) {
    res.status(500).send('Error deleting user');
  }
});

export default router;
