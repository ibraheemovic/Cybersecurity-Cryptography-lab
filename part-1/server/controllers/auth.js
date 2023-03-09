const bcrypt = require("bcryptjs")
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const compare = bcrypt.compareSync(password, users[i].password)
        if (users[i].username === username && compare) {
          const oldUser = {...users[i]};
          delete oldUser.password;
          res.status(200).send(oldUser);
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const newUser = {...req.body};
      const{password} = newUser;
      const salt = bcrypt.genSaltSync(5);
      newUser.password = bcrypt.hashSync(password, salt);
        console.log('Registering User');
        users.push(newUser);
        console.log(newUser)
        res.status(200).send(newUser)
    },
};