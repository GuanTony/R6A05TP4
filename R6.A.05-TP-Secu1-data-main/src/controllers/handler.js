export const getAuthHandler = function (req, rep) {

    const token = req.headers.authorization.split(' ')[1]
    if (token) {
        return rep.send({message: "Authentification réussie"})
    }
    
}

export const getHomeHandler = (req, res) => {
    return res.send({'hello': 'world'})
}