const jwt = require('jsonwebtoken')
const secret = 'RX#hl$bX5sbw%9xW';

class TokenManager {
    verifyJWT = (req, res, next) => {
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).json({auth: false, message: 'No token provided.'});
        jwt.verify(token, secret, (err, decoded) => {
            if (err) return res.status(500).json({auth: false, message: 'Failed to authenticate.'});
            req.userId = decoded.id; 
            next(); // filtro: acrescenta userId e segue para o próximo
        });
    }
    sign = (id) => {// token expira em 5 min
    return jwt.sign({id}, secret, {expiresIn: 300});}
}

module.exports = TokenManager