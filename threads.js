process.env.UV_THREADPOOL_SIZE = 5

const crypto = require("crypto")
const http = require("http")

const start = Date.now()

crypto.pbkdf2("a", "b", 100000, 521, "sha512", () => {
  console.log("1: ", Date.now() - start)
})

crypto.pbkdf2("a", "b", 100000, 521, "sha512", () => {
  console.log("2: ", Date.now() - start)
})

crypto.pbkdf2("a", "b", 100000, 521, "sha512", () => {
  console.log("3: ", Date.now() - start)
})

crypto.pbkdf2("a", "b", 100000, 521, "sha512", () => {
  console.log("4: ", Date.now() - start)
})

crypto.pbkdf2("a", "b", 100000, 521, "sha512", () => {
  console.log("5: ", Date.now() - start)
})

http
  .createServer(function (req, res) {
    res.write("Hello World!") //write a response to the client
    res.end() //end the response
  })
  .listen(3000)
