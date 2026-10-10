// import Part1 from "./Part1/Part1";
// import Part2 from "./Part2/Part2";
// import Part3 from "./Part3/Part3";
// import Part4 from "./Part4/Part4";

// const Content = (props) => {
    // const { course } = props;
    // console.log(course, "courses in content");
//   return (
//     <div>
//       <Part1 part={part.name} exercises={part.exercises} />
//       <Part2 part={part.name} exercises={part.exercises} />
//       <Part3 part={part.name} exercises={part.exercises} />
//       <Part4 part={part.name} exercises={part.exercises} />
//     </div>
//   );
// };

// export default Content;

const Content = (props) => {
  const { course } = props;
  return (
    <div>
      {course.map((part) => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

export default Content;