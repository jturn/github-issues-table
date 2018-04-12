import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//Future tests for tableContainer.js
it('fetches data from a passed repo', () => {

});

it('throws an error on a failure response', () => {

});

it('handles a response with zero issues', () => {

});

it('filters data into author and label lists', () => {

});

it('displays a list item for each issue', () => {

});

it('filters dropdown lists on user input', () => {

});

it('filters issue list on author dropdown selection', () => {

})

it('filters issue list on label dropdown selection', () => {

});




