
function Course() {
  const courses = [
    {
      id: 1,
      title: "React.js",
      description: "Learn React from beginner to advanced level.",
      duration: "3 Months",
      price: "$49",
    },
    {
      id: 2,
      title: "JavaScript",
      description: "Learn modern JavaScript with practical projects.",
      duration: "2 Months",
      price: "$39",
    },
    {
      id: 3,
      title: "Node.js",
      description: "Build powerful backend applications with Node.js.",
      duration: "3 Months",
      price: "$59",
    },
  ];

  return (
    <section>
      <h2>Our Courses</h2>

      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
            <p>Price: {course.price}</p>

            <button>Enroll Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Course;

