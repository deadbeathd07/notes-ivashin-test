import NotesList from "./components/NotesList";
import initialState from "./initialState.json";
import Header from "./components/semantic/Header";
import Title from "./components/Title";
import Main from "./components/semantic/Main";
import Footer from "./components/semantic/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header>
        <Title text={initialState.title} />
      </Header>
      <Main>
        <NotesList arr={initialState.notes} />
      </Main>
      <Footer>
        <p className="info">{initialState.info}</p>
      </Footer>
    </div>
  );
}

export default App;
