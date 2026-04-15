import express from "express"
import { createBareServer } from "@tomphttp/bare-server-node"
import { uvPath } from "@titaniumnetwork-dev/ultraviolet"

const app = express()
const bare = createBareServer("/bare/")

app.use("/uv/", express.static(uvPath))

app.use((req, res) => {
  res.send(`
  <html>
  <head>
  <title>Study Tool</title>
  </head>
  <body style="text-align:center;margin-top:20vh;font-family:sans-serif;">
    <input id="url" placeholder="Enter URL" style="width:80%;padding:12px;">
    <br><br>
    <button onclick="go()">Open</button>

    <script>
    function go(){
      const url = document.getElementById("url").value
      location.href = "/uv/service/" + btoa(url)
    }
    </script>
  </body>
  </html>
  `)
})

app.listen(3000)
