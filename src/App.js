import './App.css';
import Avatar from './components/Avatar';
import UserCard from './components/UserCard';
import imgProfile1 from './assets/profile.jpeg';
import imgProfile2 from './assets/profile2.jpeg';



const peoples = [
  {
    id: 1,
    name: 'Maira Gomes',
    avatar: imgProfile1,
    jobRole: 'Desenvolvedor Fullstack',
    following: true,
    color: '#c68e'
  },
  {
    id: 2,
    name: 'Paulo Júnior',
    avatar: imgProfile2,
    jobRole: 'Engenheiro Civil',
    following: false,
    color: '#68ce'
  }
]

function App() {
  return (
    <div className="container">
      {peoples.map((people) => (
        <UserCard
          key={people.id}
          name={people.name}
          jobRole={people.jobRole}
          following={people.following}

        >
          <Avatar
            avatar={people.avatar}
            color={people.color}
          />
        </UserCard>

      ))}


    </div>
  )
};

export default App;
