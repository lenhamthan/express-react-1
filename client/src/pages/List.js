import React, {Component} from 'react';
import axios from 'axios';

class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    axios({
      "url": "/api/getList",
      "method": "GET",
      "headers": {},
    }).then(response => this.setState({list: response.data}))
      .catch(error => error);
  }

  render() {
    const {list} = this.state;

    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return (
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
        }
      </div>
    );
  }
}

export default List;
