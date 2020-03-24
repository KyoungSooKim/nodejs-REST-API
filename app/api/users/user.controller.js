exports.list = function(req, res) {
    return res.json(users)
}

exports.show = function(req, res) {
    var author = req.params.author
    var user = users.filter(user => user.name === author)
    if(!user[0]) {
        return res.status(404).json({err: 'Unknown user'})
    }
    else {
        return res.json(user)
    }
}

exports.create = function(req, res) {
    const name = req.body.name || '';
    if(!name.length){
        return res.status(400).json({err: 'Incorct name'})
    }
    const id = users.reduce((maxId, user) => {
        return user.id > maxId ? user.id : maxId
    }, 0) + 1;

    const newUser = {
        id: id,
        name: name
    };

    users.push(newUser);
    return res.status(201).json(newUser);
}

exports.delete = function(req, res) {
    var author = req.params.author
    var userIdx = users.findIndex( user => user.name === author)
    if(userIdx === -1) {
        return res.status(404).json({err: 'Unknown user'})
    }
    else {
        users.splice(userIdx, 1)
        res.status(204).send()
    }
}

let users = [
    {
      id: 1,
      name: 'kim'
    },
    {
      id: 2,
      name: 'jonh'
    },
    {
      id: 3,
      name: 'david'
    }
  ]