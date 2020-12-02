import express from 'express'

import {p2} from './problems/day2'

console.log(`p2: ${p2()}`)


const app = express()

const port = 3000

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})
