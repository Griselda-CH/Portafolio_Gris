import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import indexRoutes from './routes/index.js'
import { Conectar } from './public/services/conexion.js'



const app= express()

const __dirname= dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname, 'views'))
app.use(indexRoutes)

app.set('view engine', 'ejs')
Conectar()


app.use(express.static(join(__dirname, 'public')))

app.listen(8080)
console.log("El servidor está siendo escuchado en el puerto: ",8080)