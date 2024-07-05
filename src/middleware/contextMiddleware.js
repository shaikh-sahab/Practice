import QueryContext from '../../db/queryContext.js';
import db from '../../db/dbtest.js'

export const contextMiddleware = async (req, res, next) => {
  try {
    console.log('contextMiddleware called');
    console.log('Time:', new Date().toISOString());
    console.log('URL:', req.url, 'Method:', req.method);

    // Check database connectivity
    await db.raw('SELECT 1');

    // Set up query context
    req.context = new QueryContext(db);

    // Log context setup
    console.log('QueryContext set up');

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error(`Error -> contextMiddleware, ${error.message}`);
    return res.status(500).send({
      status: false,
      error: 'INTERNAL_SERVER_ERROR',
    });
  }
};
