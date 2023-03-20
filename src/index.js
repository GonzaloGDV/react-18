import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
  title: 'Atomic Habits',
  author: 'James Clear',
  img: 'https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
};

const secondBook = {
  title: 'Interesting Facts For Curious Minds',
  author: 'Jordan Moore',
  img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/518z5dvykPL._SX348_BO1,204,203,200_.jpg',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
