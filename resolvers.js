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

//resolver map
export const resolvers = { 
    Query: {
        getFriend: ({id}) => {
            return new Friend(id, friendDataBase[id])
            },

    },
    Mutation: {
        createFriend : ({input}) =>{
            let id = require('crypto').randomBytes(10).toString('hex');
            friendDataBase[id] = input;
            return new Friend(id, input)
        },
    }
};