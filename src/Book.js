const Book = ({ img, title, author, number }) => {
  return (
    <article className='book'>
      <h6 className='number'>#{number + 1}</h6>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
