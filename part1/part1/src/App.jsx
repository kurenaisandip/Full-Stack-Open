const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamental of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = ({course})=> {
   return(
<div>
    <h1>{course}</h1>
   </div>
   )
  }

  const Part = ({name, exercise}) => {
    return (
      <div>

    <p>
    {name} {exercise}
   
    </p>
      </div>
    )
  }

  const Content = ({part1, part2, part3, exercises1, exercises2, exercises3})=> {
    return (
    <div>
      <Part name = {part1} exercise={exercises1} />
      
      <Part name = {part2} exercise={exercises2} />
      <Part name = {part3} exercise={exercises3} />
      </div>
    )
  }

  const Total = ({exercises1, exercises2, exercises3}) => {
    return (
    <div>
    <p> Number of exercises {exercises1 + exercises2 + exercises3} </p>
      </div>
    )
  }

  return (
    <div>
    <Header course = {course} />
    <Content part1={part1} part2={part2} part3={part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )
}
export default App;

//React cannot render objects instead the individuals things render in the braces must be primtive values, such as numbers or strings.
