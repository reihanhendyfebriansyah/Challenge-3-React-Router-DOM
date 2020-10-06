import React from 'react';
import Utama from './Components/Utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
      <div class="navbar navbar-dark bg-dark">
        <div>
        <Link to='/'>Beranda</Link> |
        <Link to="/tentangsaya">tentangsaya</Link> |
        <Link to="/karya">Karya</Link> |
        <Link to="/kontak">Kontak</Link> <hr />
        
        
       </div>
      
      </div>
      
      <p><Utama /></p>
      </div>
    );
  }
}

export default App;

//tadiiii di line 2 kamu manggil componentnya '/..Component/Utama' dan harusnya itu './Components/Utama'
//udah yaaa
//maksih ya jadi terharu aku huuuaaa, tanpa kamu bisa apa wkwkwk astagafirullah aku ndak bisa mgoding
//bisaaa, tp ga telitiii babaii