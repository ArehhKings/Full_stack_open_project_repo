const Part1 = ({ part, exercises }) => {
  console.log(part, exercises);
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
};


export default Part1;