import React, { Component } from "react";

export default class AppClass extends Component { 
    constructor(props) { 
    super(props);
    this.state = {counter : 0};
    this.handleClick = this.handleClick.bind(this);
}

handleClick() { 
}
render() { 
return <div>AppClass</div>;
}
}








function App() {
  return <div className="App">Olá React</div>;
}

export default App;
