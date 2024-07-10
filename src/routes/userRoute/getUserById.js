
const getUserById = async (req, res) => {
    
    try {
        
      const user = await req.context.userModel.getById(req.params.id);
      
      res.status(200).json(user);
      
    } catch (error) {
        
      res.status(500).json({ error: 'INTERNAL_SERVER_ERROR' });
      
    }
    
  };
  
  export default getUserById;
  