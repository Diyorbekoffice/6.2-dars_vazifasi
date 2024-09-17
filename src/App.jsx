import UserList from './components/UserList';
import data from './assets/data/data.json'


function App() {
    console.log(data);
    
    return (
        <div>
            <UserList data = {data}/>
        </div>
    )
}

export default App
