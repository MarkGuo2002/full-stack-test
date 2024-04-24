const express = require("express");
const app = express();
const pool = require("./db");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const jwt_secret = "hello"

app.use(cors());
app.use(express.json());

app.post("/api/register", async(req, res) => {
    const {username, password} = req.body
    console.log(username, password)
    try{
        const newUser = await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
            [username, password]
          );
          res.json(newUser.rows[0]);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
});



app.post("/api/login", async(req, res) => {
    const {username, password} = req.body
    console.log(username, password)

    try{
        const user = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        if (user.rows.length ===0){
            return res.status(400).json({ msg: 'User not found' });
        }

        if (user.rows[0].password != password){
            return res.status(400).json({ msg: 'Password incorrect' });
        }
        const token = jwt.sign({id: user.rows[0].user_id }, jwt_secret, {expiresIn: 3600});
        res.json({ token });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

app.listen(5000, ()=> console.log(`Server running on port 5000`));