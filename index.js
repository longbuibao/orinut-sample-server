const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const Order = require("./Orders")

const app = express()

app.use(
  cors({
    credentials: true,
    origin: "https://orinut.vercel.app",
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post("/data", async (req, res) => {
  const order = new Order({ ...req.body })
  await order.save()
  console.log(order)
  res.send("OKE")
})

app.listen(process.env.PORT || 3002, () => {
  console.log("Listening on port 3002")
  console.log("Connecting to database...")

  mongoose.connect(
    "mongodb+srv://orinut:11011010@orinut.qh3th.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    (e) => (e ? console.log(e) : console.log("Successfully connected!"))
  )
})
