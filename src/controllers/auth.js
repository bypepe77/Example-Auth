const User = require('../models/user');
const bycrypt = require('bcryptjs')
const { generateToken } = require('../utils/jwt')

const create = async ( req, res ) => {

    try {
        const {name, email, password, username } = req.body

        const ifExistUser = await User.findOne({email});

        if(ifExistUser) return res.status(400).json({status: false, msg:"user already exists"})

        const user = new User( req.body )

        const salt = await bycrypt.genSaltSync()

        user.password = await bycrypt.hashSync( password, salt)

        await user.save();

        const token = await generateToken( user.id )

        res.json({ status: true, user, token})

    } catch (error) {
        console.log(error)
        res.status(500).json({status: false, msg: "Error creating user"})
    }   
}

const getUsername = (req, res) => {
    try {
        res.json("Path with token")
    } catch (error) {
        console.log("error")
    }

}

module.exports = {
    create,
    getUsername
}

