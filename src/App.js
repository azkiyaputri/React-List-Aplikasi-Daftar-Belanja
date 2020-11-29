import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div> <hr />
      <nav class="navbar navbar-expand-lg navbar-warning bg-light">
        <a class="navbar-brand" href="/list">List</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
      <hr />
      <p><Utama /></p>
      </div>
    );
  }
}
export default App;