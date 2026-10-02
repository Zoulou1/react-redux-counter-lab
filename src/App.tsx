import Counter from "./components/Counter";

function App() {
  return (
    <main className="page">
      <p className="eyebrow">GUIDED LEARNING ACTIVITY</p>
      <h1>React + Redux Counter</h1>
      <p className="intro">A small example of global state in a React app.</p>
      <Counter />
      <p className="note">Open the browser console to see redux-logger in action.</p>
    </main>
  );
}

export default App;
