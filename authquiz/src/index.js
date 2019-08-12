import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthQuiz from './AuthQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore'

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

function getTurnDate(authors){
    const allBooks = authors.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, []);
    const fourBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourBooks);

    return {
        books: fourBooks,
        author: authors.find((author) =>
            author.books.some((title) =>
                title === answer)
        )
    }
    
}

const state = {
    turnData: getTurnDate(authors),
    highlight: ''
}

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((title) => title === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}

function render() {
    ReactDOM.render(<AuthQuiz {...state} onAnswerSelected={onAnswerSelected}/>, document.getElementById('root'));
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
