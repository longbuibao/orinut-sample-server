const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const Order = require("./Orders")

const app = express()

const whitelist = [
  "https://orinut.vercel.app",
  "http://localhost:3000",
  "https://www.orinutmilk.com",
  "https://orinutmilk.com",
]

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
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
