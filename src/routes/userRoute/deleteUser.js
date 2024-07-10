
const deleteUser = async (req, res) => {
    
    try {
        
      await req.context.userModel.delete(req.params.id);
      
      res.status(204).send();
      
    } catch (error) {
        
      res.status(500).json({ error: 'INTERNAL_SERVER_ERROR' });
      
    }
    
  };
  
  export default deleteUser;
  