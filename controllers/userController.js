const userModel = require("../models/User.model")
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const encpwd = await bcrypt.hash(password, 10)

        const user = await userModel.create({ fullname, email, password: encpwd })
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error })
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).json({ data: users })
    } catch (error) {
        res.status(500).json({ error })
    }
}