import Button from "./Button"


export const Home = ({ name, isTeaching}) => {
  return <>
  <div>{name.class}</div>
  <h2>{isTeaching}</h2>
  </>
}

function App() {
  const name = {
    surname: 'name',
    class: 'Techathon'
  }

  return (
    <>
    <div>
     <h1>London</h1>
    </div>

    <div>
      <Home name={name} isTeaching={'Yes, I am teaching'}/>
      <Button title={{ name: 'Click Me', dass: 'Jss1'}} background={'red'}/>
      <Button title={{ name: 'About Me', dass: 'Bio'}}/>
      <Button title={{ name: 'Submit', dass: 'Done'}}/>
    </div>
    </>
  )
}

export default App
