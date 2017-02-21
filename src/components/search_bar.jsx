import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this._onInputChange = this._onInputChange.bind(this);
  }

  _onInputChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.term}
               onChange={this._onInputChange} />
        <br/>
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
