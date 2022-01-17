import express from "express";
import schema from './schema';
import { graphqlHTTP } from "express-graphql";
import resolvers from "./resolvers";

const app = express();

const root = resolvers;

app.get('/', (req, res) => {
    res.send("GraphQL is Amazing !");
});

app.use('/graphql', graphqlHTTP ({
    schema : schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log("Running on server port localhost:8080/graphql"));