import {addUser, loginUser, home, auth} from "../controllers/login.js";

export default async (app, opts) => {
    app.post('/signup', {}, addUser)
    app.post('/signin', {}, loginUser)
    app.post('/home', {}, home)
    app.post('/auth', {}, auth)
}

