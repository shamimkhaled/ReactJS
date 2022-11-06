import Header from "./components/Header";
// export components to use in other files to import in this way.
import { MyAllHeaders, MyAllHeaders2 } from "./components/Header";

function App() {
  return (
    <div className="App">
          <Header name="App Development Course" text="For Beginners" price={999} />
          <MyAllHeaders  />
          <MyAllHeaders2 name="Master Class Course" price={1000} />
    </div>
  );
}

export default App;
