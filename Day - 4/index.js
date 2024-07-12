const express = require("express");
const app = express();

app.get("/" , (req,res) => {
    return res.json({
        "id": "Tejesh"
    })
})

const PORT = 8000
app.listen(PORT, ()=> {
    console.log("Server Started at PORT: ", PORT)
})