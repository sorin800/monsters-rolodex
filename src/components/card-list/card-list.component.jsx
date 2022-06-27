import {Component} from "react";
import './card-list.style.css'

class CardList extends Component {
    render() {
        console.log(this.props.monsters)
        console.log('render from cardlist')
        const {monsters} = this.props;

        return (
            <div className='card-list'>
                {
                    monsters.map(monster => {
                        const {name, email, id} = monster
                        return (
                            <h1>
                                <div className='card-container' key={id}>
                                    <img src={`https://robohash.org/${id}?set=set2&size=180x180`}
                                         alt={`monster ${name}`}/>
                                    <h2>{name}</h2>
                                    <p>{email}</p>
                                </div>
                            </h1>)
                    })
                }
            </div>
        )
    }
}

export default CardList