import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // pehle se khali nhi hai
      setLikedCourses((prev) => prev.filter((id) => id !== course.id));
      toast.warning("Like removed");
    } else {
      if (likedCourses === []) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked successfully");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-90 rounded-xl overflow-hidden">
      <div>
        <div className="relative">
          <img alt={course.image.alt} src={course.image.url} />
          <button
            onClick={clickHandler}
            className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-15px] flex items-center justify-center"
          >
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substring(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};
export default Card;
