import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./components/Home";
// import DetailMakanan from "./components/DetailMakanan";
// import Error from "./components/Error";
// import Menu from "./components/Menu";

const httpLink = new HttpLink({
  uri: "https://mini-project-fe.hasura.app/v1/graphql",
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      "AxGvtrab4oENjk2B6cwYXNZ2vG8l6btyZC6s7rVn26txUFOXfi0mcKGm6NeGSXg1",
  },
});

const wsLink = new WebSocketLink({
  uri: "wss://mini-project-fe.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "AxGvtrab4oENjk2B6cwYXNZ2vG8l6btyZC6s7rVn26txUFOXfi0mcKGm6NeGSXg1",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
