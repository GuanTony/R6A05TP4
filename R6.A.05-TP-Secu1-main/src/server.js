import Fastify from "fastify"
import fastifyBasicAuth from "@fastify/basic-auth"
import fs from "fs"


const port = 3000;
const authenticate = {realm: 'Westeros'}
const path = 

const fastify = Fastify({
    logger: true
})


const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'https', 'fastify.key')),
    cert: fs.readFileSync(path.join(__dirname, 'https', 'fastify.cert'))
}

const fastify = Fastify({
    logger: true
})

fastify.register(fastifyHttps, {
    httpPort: 3000
})
}
fastify.register(fastifyBasicAuth, {
    validate,
    authenticate
})

async function validate(username, password, req, reply) {
    if (username !== 'Tyrion' || password !== 'wine') {
        return new Error('Winter is coming')
    }
}

fastify.get('/dmz', {}, (req, res) => {
    res.send({replique: "Ca pourrait être mieux protégé..."})
})

fastify.after(() => {
    fastify.route({
        method: 'GET',
        url: '/secu',
        onRequest: fastify.basicAuth,
        handler: async (req, reply) => {
            return {
                replique: 'Un Lannister paye toujours ses dettes !'
            }
        }
    })
    fastify.route({
        method: 'GET',
        url: '/autre',
        handler : async (req, reply) => {
            return{
                replique : 'Route sans mdp ouvert à tous !'
            }
        }
        })
})

fastify.setErrorHandler(function (err, req, reply) {

    if (err.statusCode === 401) {
        console.log(err)
        reply.code(401).send({replique: 'Tu ne sais rien, John Snow..'})
    }
    reply.send(err)
})

fastify.listen({port}, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }

    fastify.log.info(`Fastify is listening on port: ${address}`);
});
