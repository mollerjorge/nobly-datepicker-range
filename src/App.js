import React, { Component } from 'react';
import NDatepicker from './components/NDatepicker/NDatepicker';

class App extends Component {
  
	render(){
    
		
		return (
      <div style={{display: 'flex'}}>
        <div style={{width: '20%', minHeight: '100vh', display: 'inline-block', background: 'red'}}/>

        <div style={{width: '80%', minHeight: '100vh', background: 'blue', padding: '3rem', display: 'flex'}}>
          <NDatepicker id="1"/>

          <div>
            This is some content to test responsiveness
          </div>

          <NDatepicker id="2"/>
        </div>
      </div>
		)
	}
}
export default App;
