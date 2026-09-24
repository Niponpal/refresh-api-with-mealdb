
function Card() {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/300"
        alt="Course"
      />

      <div className="card-content">
        <h2>Web Development</h2>

        <p>
          Learn modern web development with HTML, CSS,
          JavaScript, React, and Node.js.
        </p>

        <div className="card-info">
          <span>Beginner</span>
          <span>3 Months</span>
        </div>

        <button>View Course</button>
      </div>
    </div>
  );
}

export default Card;

