import Buttons from "./components/button.component"

function App() {
  return (
    <div>
      <Buttons text="Login" click={()=>alert("hello")} variant="contained"/>
      <Buttons text="Check Now" click={()=>alert("hello")} variant="contained"/>
      <Buttons text="Browse" click={()=>alert("hello")} variant="outlined"/>
      <Buttons text="Submit" click={()=>alert("hello")} variant="contained"/>
    </div>
  );
}
export default App;
