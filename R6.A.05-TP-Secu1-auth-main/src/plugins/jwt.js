import fp from 'fastify-plugin'
import fastifyJwt from "@fastify/jwt"
import fs from 'fs'
import path from 'path'


export default fp(async function (app, opts) {

    const pathToPrivateKey = path.join(__dirname, '../../.ssl/ec_private.pem')
    const pathToPublicKey = path.join(__dirname, '../../.ssl/ec_public.pem')
    const privateKey = fs.readFileSync(pathToPrivateKey, 'utf8')
    const publicKey = fs.readFileSync(pathToPublicKey, 'utf8')


    app.register(fastifyJwt, {
        secret : {
            private : privateKey,
            public : publicKey,
        },
        sign: {
            algorithm: 'ES256',
            issuer: 'info.iutparis.fr'
        },
    })

})
