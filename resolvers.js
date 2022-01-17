const friendDataBase = {};

class Friend{
    constructor(id, {firstName, lastName, gender, email}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
}

const resolvers = { getFriend: ({id}) => {
    return new Friend(id, friendDataBase[id])
    },
    createFriend : ({input}) =>{
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDataBase[id] = input;
        return Friend(id, input)
    }
};


export default resolvers;