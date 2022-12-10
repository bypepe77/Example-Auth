const jwt = require('jsonwebtoken');


const Authorize = (req, res, next) => {
    try {
        const token = req.header('Authorization')

        if (!token) return res.status(401).json({status: false, msg: "Invalid token"})

        const { id } = jwt.verify(token, process.env.SECRET_KEY)

        req.id = id

        next()

    } catch (error) {
        return res.status(401).json({status: false, msg: "Invalid token"})
    }
}

module.exports = {
    Authorize
}