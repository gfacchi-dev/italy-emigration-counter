import Counter from "./Counter.tsx";
import "./App.css";
import Explanation from "./Explanation.tsx";

function App() {
  return (
    <div className="App">
      <h1>🆘 S.O.S. FUTURO ITALIA: Il Contatore 2025</h1>

      <Counter label="Totale emigrati (italiani + stranieri)" annualEmigrants={190967} />
      <Counter label="Solo italiani emigrati" annualEmigrants={114057} />
      <Counter label="Laureati italiani emigrati" annualEmigrants={37114} />
      <Counter label="Perdita economica cumulativa (laureati 2025)" annualEmigrants={25979800000} isCurrency={true} />
      <Explanation />
      <footer style={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px', fontSize: '0.7rem', color: '#555' }}>
        <p>
          Credits: <a href="https://www.linkedin.com/in/giuseppefacchi/" target="_blank" rel="noopener noreferrer" style={{ color: '#777', textDecoration: 'none' }}>Giuseppe Facchi</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
