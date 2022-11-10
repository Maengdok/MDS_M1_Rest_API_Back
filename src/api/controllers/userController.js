const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const bCrypt = require("bcrypt");

const saltRounds = 10;

exports.getUsers = (_req, res) => {
    User.find({}, (error, users) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Requête invalide." });
        } else {
            res.status(200);
            res.json(users);
        }
    })
}

exports.setUserRole = (req, res) => {
    User.findById(req.params.user_id, (error, user) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Requête invalide." });
        } else {
            user.role = req.body.role;
            user.save((err) => {
                if (err) {
                    res.status(401);
                    console.log(err);
                    res.json({ message: "Impossible de modifier l'utilisateur." });
                } else {
                    res.status(200);
                    let userData = {
                        '_id': user._id,
                        'email': user.email,
                        'role': user.role
                    };

                    res.json(userData);
                }
            });
        }
    })
}

exports.userRegister = (req, res) => {
    bCrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) {
            res.status(401);
            console.log(err);
            res.json({ message: "Hash invalide." });
        } else {
            console.log(hash);
            req.body.password = hash;
            let newUser = new User(req.body);

            newUser.save((error, user) => {
                if (error) {
                    res.status(401);
                    console.log(error);
                    res.json({ message: "Reqûete invalide." });
                }
                else {
                    res.status(201);
                    res.json({ message: `Utilisateur créé : ${user.email}` });
                }
            })
        }
    })
}

exports.loginRegister = (req, res) => {
    // Find user
    User.findOne({ email: req.body.email }, (error, user) => {
        // If user not found
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Utilisateur non trouvé" });
        }
        else {
            bCrypt.compare(req.body.password, user.password, (_err, _result) => {
                if (user.email === req.body.email) {
                    // Password correct
                    let userData = {
                        id: user._id,
                        email: user.email,
                        role: user.role,
                    };

                    jwt.sign(userData, process.env.JWT_KEY, { expiresIn: "30 days" }, (err, token) => {
                        if(err) {
                            res.status(500);
                            console.log(err);
                            res.json({message: "Impossible de générer le token"});
                        }
                        else {
                            res.status(200);
                            res.json({userData, token});
                        }
                    });
                }
                else {
                    // Password don't match
                    res.status(401);
                    console.log(error);
                    res.json({ message: "Email ou Mot de passe incorrect" });
                }
            });
        }
    })
}