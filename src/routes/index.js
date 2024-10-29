import { Router} from "express"
const router = Router()

router.get('/', (req,res) => res.render('index',{title: 'Inicio'}))

router.get('/sobremi', (req,res) => res.render('sobremi',{title: 'Sobre Mì'}))

router.get('/servicios', (req,res) => res.render('servicios',{title: 'Servicios'}))

router.get('/curriculum', (req,res) => res.render('curriculum',{title: 'Curriculum'}))

router.get('/contacto', (req,res) => res.render('contacto',{title: 'Contacto'}))
export default router