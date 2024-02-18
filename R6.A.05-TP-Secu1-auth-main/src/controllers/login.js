import {createHash} from "node:crypto"

const users = []    // Simule BDD pour le stockage des utilisateurs
const role = ['admin', 'utilisateur']

export const addUser = async (req, res) => {
    const {email, password} = req.body
    const hashedPassword = createHash("sha256").update(password).digest().toString("hex")

    let user = users.find((u) => u.email === email && u.password === hashedPassword)
    if (user) {
        res.status(401).send({
            message: "Utilisateur déjà enregistré",
            user
        })
    }

    user = {
        email,
        password: hashedPassword,
        role: role[1]
    }
}

export const loginUser = async function (req, res) {
    const { email, password } = req.body;
    const hashedPassword = createHash("sha256").update(password).digest().toString("hex");


    let user = users.find((u) => u.email === email && u.password === hashedPassword);
    if (!user) {
        return res.status(401).send({ message: "Utilisateur inexsitant" });
    }
    try {
        const token = await res.jwtSign({
            email: user.email,
            role: user.role
        }, {
            expiresIn: '24h'
        });

        res.send({ token });
    } catch (error) {
        res.status(500).send({ message: "Erreur token non créé" });
    }

}

export const home = async (req, res) => {

}

export const auth = async (req, res) => {
    res.send({message: "Authentification réussie"})

}