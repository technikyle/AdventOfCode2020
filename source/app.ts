import express from 'express'

import {p1, p2} from './problems/day5'

console.log(`p1: ${p1()}`)
console.log(`p2: ${p2()}`)


const app = express()

const port = 3000

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})
