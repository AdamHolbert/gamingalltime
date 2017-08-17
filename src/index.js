import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import { GC_AUTH_TOKEN } from './constants'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'


const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj6eoa0g34syj0121t2ray1oa'
})


// This is for sending the authorization token to the server on every request
// http://dev.apollodata.com/react/auth.html#Header if you want to read more
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    const token = localStorage.getItem(GC_AUTH_TOKEN)
    req.options.headers.authorization = token ? `Bearer ${token}` : null
    next()
  }
}])


const client = new ApolloClient({
    networkInterface
})


ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('root')
)
registerServiceWorker();
