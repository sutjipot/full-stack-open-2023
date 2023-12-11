const Header = ({course}) => {
  return(
    <div>
      <h1>
        {course.name}
      </h1>
    </div>
  )
}

const Part = ({part, ex}) => {
  return(
    <p>
      {part} {ex}
    </p>
  )
}

const Content = ({course}) => {
  let fart = course.parts
  return(
    <div>
        <Part part={fart[0].name} ex={fart[0].exercises}/>
        <Part part={fart[1].name} ex={fart[1].exercises}/>
        <Part part={fart[2].name} ex={fart[2].exercises}/>
    </div>
  )
}
const Total = ({course}) => {
  let fart = course.parts
  return(
    <div>
      <p>
      {fart[0].exercises + fart[1].exercises + fart[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App;