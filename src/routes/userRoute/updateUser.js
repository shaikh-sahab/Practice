
const updateUser = async (req, res) => {
    
    try {
        
      const updatedUser = await req.context.userModel.update(req.params.id, req.body);
      
      res.status(200).json(updatedUser);
      
    } catch (error) {
        
      res.status500().json({ error: 'INTERNAL_SERVER_ERROR' });
      
    }
    
  };
  
  export default updateUser;
  