import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    // alternate method
    // .then((response) => {
    //   console.log(response.data.results);
    // });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <h2 class='ui center aligned icon header'>
          <i class='images icon'></i>
          Search on Unsplash
        </h2>
      </div>
    );
  }
}
export default App;
