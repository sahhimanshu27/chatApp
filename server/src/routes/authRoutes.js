import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../prismaClient.js'

const router = express.Router()

// Register a new user  |   endpoint    /auth/register
router.post('/register', async (req, res) => {
    const { username, password, name, email } = req.body;

    // encrypt the password
    const hashedPassword = bcrypt.hashSync(password, 8)

    // save the new user and hashedPassword to the db
    try {

        // cheack if username already exists
        const users = await prisma.user.findUnique({
            where: {
                username: username
            }
        })

        if (users) {
            return res.status(404).send({ message:"Username taken." })
        }

        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                email,
                name
            }
        })

        // create a token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.status(200).json(user, { token })
    } catch (error) {
        console.log(error.message)
        res.sendStatus(503)
    }
})

// Login    |   endpoint    /auth/login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })

        // guard clause
        if (!user) {
            return res.status(404).send({ message:"User not found." })
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password)

        if (!passwordIsValid) {
            return res.status(401).send({ message: "Invalid Password" })
        }

        // successful authentication
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h'})
        res.status(201).json(user, { token })
    } catch (error) {
        console.log(error.message)
        res.sendStatus(503)
    }
})

// create routes to change stuff and delete stuff.

export default router