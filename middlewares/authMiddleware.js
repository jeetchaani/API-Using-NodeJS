const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
         const authHeader = req.header('Authorization');
         
       if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Invalid or missing Authorization header.'+authHeader });
      }
    
      const token = authHeader.split(' ')[1];
      
      if(!token) {
            return res.status(401).json({ message: 'Authorization token not provided.' });
         }
       jwt.verify(token, secretKey, (error, decodedToken) => {
        if (error) {
            return res.status(401).json({ message: 'Invalid token.' });
          } 
          req.user = decodedToken.id;
          next();
       });
};

module.exports = authMiddleware;