import './App.css';
import {Component} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {

    constructor() {
        // constructor runs first
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    //the first time react renders a component it calls this method
    //it's called only once when the component is first rendered on the page
    componentDidMount() {
        //this runs third after render is called
        //when we fetch is this will give us a promise which is asynchronously
        // if it succeds we can call then
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) //whatever is returned from here will be passed further
            .then((users) => this.setState(() => {
                return {monsters: users}
            }, () => {
            }))
    }


    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();

        this.setState(() => {
            return {searchField}
        })
    }

    render() {
        //render runs second after constructor

        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        })

        return (
            <div className="App">
                {/*                {
                    filteredMonsters.map((monster) => {
                        return <div key={monster.name}>
                            <h1>{monster.name}</h1>
                        </div>;
                    })
                }*/}
                <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
                <CardList monsters={filteredMonsters}/>

            </div>
        );
    }

}

export default App;
