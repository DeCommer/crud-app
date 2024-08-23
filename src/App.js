import './App.css';

import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <UsingProps property1="value1" property2="value2" /> */}
      <Counter/>
    </div>
  );
}


// function UsingProps(properties) {
//   console.log(properties);
//   console.log(properties.property1);
//   console.log(properties.property2);
//   return (
//     <div>Props</div>
//   )
// }

// function UsingProps({property1, property2}) {
//   console.log(property1);
//   console.log(property2);
//   return (
//     <div>Props</div>
//   )
// }

export default App;
