
import './App.css';
import Profile from './Profile/Profile'
import profileImage from './profileImage.jpg'

function App() {  
return(
<div>
    <Profile
    imgSrc={profileImage}
    fullName='Habib Razek'
    bio='lore ipsum dolor sit amet, consectetur adipiscing elit, sed diam '
    profession='Full Stack Developer'
    Affiche={() => alert('Habib Razek')}
  />
  
</div>


)
}

export default App;
