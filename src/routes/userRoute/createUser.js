
const createUser = async (req, res) => {
    
    try {
        
      const newUser = await req.context.userModel.create(req.body);
      
      res.status(201).json(newUser);
      
    } catch (error) {
        
      res.status(500).json({ error: 'INTERNAL_SERVER_ERROR' });
      
    }
    
  };
  
  export default createUser;
  