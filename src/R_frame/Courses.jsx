import Course from "./Course"

function CoursesOffered()
{
  return (
    <div className="courses-container">
      <p className="admin-frame-heading-courses">Courses Offered</p>
      <div className="courses-container-grid">
        <p className="single-highlight-sideline-courses">Click on a course to view its participants and details</p>
        <Course/>
      </div>
    </div>
  )
}

export default CoursesOffered;