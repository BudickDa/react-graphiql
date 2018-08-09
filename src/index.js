import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import {url, username, password} from './config';

import 'graphiql/graphiql.css';



function graphQLFetcher(graphQLParams) {
    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    headers.set('Content-Type', 'application/json');
    return fetch(url, {
        method: 'post',
        headers: headers,
        body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
}

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher}/>, document.getElementById('root'));
