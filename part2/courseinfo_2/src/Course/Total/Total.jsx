const Total = ({course}) => {
    // const num = props.exercises1 + props.exercises2 + props.exercises3 + props.exercises4;
    // const num = course.reduce((sum, part) => sum + part.exercises, 0);
    // console.log(num, "the log number");
  return (
    <div>
      <h4>
        Total {course.reduce((sum, part) => sum + part.exercises, 0)} of exercises{" "}
      </h4>
    </div>
  );
};


export default Total;