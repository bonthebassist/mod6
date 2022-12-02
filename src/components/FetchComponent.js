import React from 'react';
import axios from 'axios'
class Fetcher extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data:null}
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.data)
            .then(json => {
                let postTitle = json.title
                this.setState({data: postTitle})
            })
        }

    render() {
        return (
            <div>
                <h3>{this.state.data}</h3>
            </div>
        )
    }
}

export default Fetcher