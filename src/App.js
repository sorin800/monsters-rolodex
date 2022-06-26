import './App.css';
import {Component} from "react";

class App extends Component {

    constructor() {
        // constructor runs first
        console.log("1")
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
        console.log('constructor')
    }

    //the first time react renders a component it calls this method
    //it's called only once when the component is first rendered on the page
    componentDidMount() {
        console.log('componentDidMount')
        //this runs third after render is called
        //when we fetch is this will give us a promise which is asynchronously
        // if it succeds we can call then
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) //whatever is returned from here will be passed further
            .then((users) => this.setState(() => {
                return {monsters: users}
            }, () => {
                console.log(this.state)
            }))
    }


    render() {
        console.log("render")
        //render runs second after constructor
        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(this.state.searchField);
        })

        return (
            <div className="App">
                <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
                    // this.setState({monsters: this.state.monsters.filter( monster => { return monster.name.includes(event.target.value)})})
                    console.log(event.target.value)
                    const searchField = event.target.value.toLocaleLowerCase();


                    this.setState(() => {
                        return {searchField}
                    })
                }}/>
                {
                    filteredMonsters.map((monster) => {
                        return <div key={monster.name}>
                            <h1>{monster.name}</h1>
                        </div>;
                    })
                }

            </div>
        );
    }

}

export default App;
