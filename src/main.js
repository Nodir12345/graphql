import { createApp, provide, h } from 'vue'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// it is graphql link 
const httpLink = createHttpLink({
    uri: 'https://graphqlzero.almansi.me/api',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})
import { DefaultApolloClient } from '@vue/apollo-composable'
const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

app.mount('#app')