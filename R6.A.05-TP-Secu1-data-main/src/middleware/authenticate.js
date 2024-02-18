export async function getAuthenticate(req, res) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = await req.jwtVerify(token)
        res.send({message: "Authentification réussie", decoded})

    } catch (err) {
        res.code(401).send({...err, message: "Vous ne passerez pas !"})
    }
}