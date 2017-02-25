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

    this.props.onSearchTermChange(e.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term}
               onChange={this._onInputChange} />
      </div>
    );
  }
}

export default SearchBar;
