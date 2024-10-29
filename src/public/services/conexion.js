import pg from 'pg' ;
const {Client}= pg;

const config={
    user: 'portafolio_gris_bd_user',
    host: 'dpg-csg4s368ii6s739c599g-a.oregon-postgres.render.com',
    database: 'portafolio_gris_bd',
    password: '26B3D5bfWkltRk3UslVCpkkFrHaDYDY3',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
}
export async function Conectar(params) {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de datos")
    }catch(error){
        console.log(error)
    }
}