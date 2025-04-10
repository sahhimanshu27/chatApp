import express from "express"

import authRoutes from "../src/routes/authRoutes.js"

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())

// routes
app.use('/api/v1/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})