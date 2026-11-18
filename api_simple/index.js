const express = require('express')
const app = express()
const port = 3001

require('./routes')(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})