const { findUser, createUser } = require('../queries/user');

module.exports =  {
    async signup(req, res){
       const { email, password } = req.body;
       if(!email || !password ) return res.status(400).send({ error: 'Email or password missing '});

        const userExists = await findUser({ email }); 
       if(userExists)
       return res.status(422).send({ error: 'User exists'});

       const newUser  = await createUser({ email, password });

        return res.json(newUser);
    }
}