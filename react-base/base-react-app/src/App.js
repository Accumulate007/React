import React from 'react';


// 组件书写方式一
// function App() {
//   return (
//     <div className="App">
//       Hello Hangzhou
//     </div>
//   );
// }


// 组件书写方式二
class App extends React.Component {
  render() {
    return (
      <div className="App">
        Hello Hangzhou, by class
      </div>
    )
  }
}



export default App;
