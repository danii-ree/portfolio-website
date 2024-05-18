import './App.css';
import Menu from './components/Navbar';
import TextHolder from './components/TextHolder';
import profile from './Images/profile.png'

function App() {
  return (
    <div className="App">
      <Menu/>
      <div className="projectContainer">
          <TextHolder 
          subtext={"I’m a 17-year-old software developer who loves creating video games. I have a passion for programming, computer engineering and physics. "}
          />
          <div className='square'>
            <div className='profile'>
              <img src={profile}/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
