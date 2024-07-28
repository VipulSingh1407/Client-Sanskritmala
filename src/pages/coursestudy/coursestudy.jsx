import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/courseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id)) {
    return navigate("/");
  }

  useEffect(() => {
    fetchCourse(params.id);
  }, [fetchCourse, params.id]);

  return (
    <>
      {course && (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-40 bg-gray-900 text-white">
          <img
            src={`${server}/${course.image}`}
            alt={course.title}
            className="w-1/2 max-w-xs h-auto mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
          <h2 className="text-3xl font-extrabold text-yellow-200 mb-4 transition-transform transform hover:scale-105">
            {course.title}
          </h2>
          <h4 className="text-xl font-semibold text-gray-300 mb-4 transition-transform transform hover:scale-105">
            {course.description}
          </h4>
          <h5 className="text-lg font-medium text-gray-400 mb-4">
            by - {course.createdBy}
          </h5>
          <h5 className="text-lg font-medium text-gray-400 mb-6">
            Duration - {course.duration} weeks
          </h5>
          <Link
            to={`/lectures/${course._id}`}
            className="px-6 py-3 bg-green-500 text-black rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-green-600"
          >
            <h2 className="text-lg font-bold">Lectures</h2>
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
