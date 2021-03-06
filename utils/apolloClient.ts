import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import WebSocket from 'isomorphic-ws';

const httpLink = new HttpLink({
  uri: 'https://denispotapov.ru/v1/graphql',

  // uri: 'https://194.163.167.188:8080/v1/graphql',
  // uri: 'https://explorer.chainops.org/api/v1/graphql',
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://denispotapov.ru/v1/graphql',
    // url: 'ws://194.163.167.188:8080/v1/graphql',
    // url: 'wss://explorer.chainops.org/api/v1/graphql',
    webSocketImpl: WebSocket,
  })
);

const splitLink =
  typeof window !== 'undefined'
    ? split(
        ({ query }) => {
          const { kind, operation }: any = getMainDefinition(query);
          return kind === 'OperationDefinition' && operation === 'subscription';
        },
        wsLink,
        httpLink
      )
    : httpLink;

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: splitLink,

  cache: new InMemoryCache(),
});

export default client;
