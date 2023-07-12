import './App.css';
import CreateCoworking from './CreateCoworkings';
import ListCoworkings from './ListCoworkings';
import ContactForm from './ContactForm';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Création de coworking</h1>
      </header>
      <main>
        <CreateCoworking />
        <ListCoworkings />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;













