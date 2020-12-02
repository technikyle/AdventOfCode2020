import express from 'express'

import {p1} from './problems/day1'

console.log(`p1: ${p1()}`)


const app = express()

const port = 3000

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})
