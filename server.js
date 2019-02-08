const express = require('express')
const cors = require('cors')
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 80
app.use(cors())

/**
 * Get Point of Interest
 */
app.get('/poi', (req, res) => {
    const poi = {
        //Could pull poi's from file instead
        poi:[
            {
                name: "Fujiya Foods",
                location: [-123.333255, 48.459392]
            },
            {
                name: "Island Poké",
                location: [-123.364845, 48.429063]
            }
            ]

    }

    return res.json(poi)
    })

app.listen(port, () => console.log(`Listening on port ${port}!`))