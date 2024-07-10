
const badRequestError = (err, req, res) => {

    console.error('Error:', err);

    res.status(400).json({

      status: 'error',

      message: 'BAD_REQUEST_ERROR',

    });

  };
  
export default badRequestError;
  