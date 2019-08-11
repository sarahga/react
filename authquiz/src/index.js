import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthQuiz from './AuthQuiz';
import * as serviceWorker from './serviceWorker';

const authors = [
    {
        name: 'Jane Austin',
        imageUrl: 'images/authors/jane.jpg',
        imageSource: 'baike',
        books: ['Pride and Predjudice',
                'Emma',
                'Rational and emotional'
            ]
    },
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/mark.jpg',
        imageSource: 'baike',
        books: ['The adventures of Huckleberry Finn',
                'Life on the Mississippi',
                'Roughing It'
            ]
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/will.jpg',
        imageSource: 'baike',
        books: ['Hamlet',
                'macbeth',
                'Romeo and Juliet'
            ]
    }
];

function getTurnDate({authors}){
    
}

const state = {
    turnData: getTurnDate(authors)
   
}

ReactDOM.render(<AuthQuiz {...state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
