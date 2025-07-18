const Testimonial = ({ className, author, role, highlight, text, image }) => {
  return (
    <div className={`testimonial ${className}`}>
      {className === 'purple' && (
        <img src="images/bg-pattern-quotation.svg" alt="Purple quotation mark" className="quotation-mark" />
      )}
      <div className="header">
        <img src={`images/${image}`} alt={author + ' profile image'} className="profile-img" />
        <div className="author-info">
          <h2>{author}</h2>
          <p>{role}</p>
        </div>
      </div>
      <p className="highlight">{highlight}</p>
      <p className="testimonial-text">{text}</p>
    </div>
  );
};

export default Testimonial; 