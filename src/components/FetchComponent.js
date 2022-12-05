import React from 'react';
import axios from 'axios'
class Fetcher extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data:null}
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => response.data)
            .then(json => {
                let userNameArray = []
                for (let i in json){
                    let userName = json[i].name
                    userNameArray.push(userName)
                }
                this.setState({data: userNameArray})
            })
            
        }
    render() {
            if (this.state.data){
            let stateData = this.state.data
            const listItems = stateData.map((name) =>
            <li key={name}>{name}</li>);
            return (
                <div>
                    <ul>{listItems}</ul>
                </div>
            )
            }
        }
    
}

export default Fetcher