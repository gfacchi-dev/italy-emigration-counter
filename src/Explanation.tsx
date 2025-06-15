import { useState } from 'react';
import './Explanation.css';

const Explanation = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // Default to collapsed

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="explanation-section">
      <button 
        onClick={toggleCollapse} 
        style={{ 
          background: '#333', 
          color: 'white', 
          border: '1px solid #555', 
          padding: '10px 15px', 
          cursor: 'pointer', 
          borderRadius: '5px',
          marginBottom: '15px',
          fontSize: '1rem',
          width: '100%' 
        }}
      >
        {isCollapsed ? '📖 Mostra Spiegazione Dettagliata' : '📖 Nascondi Spiegazione'}
      </button>

      {!isCollapsed && (
        <>
      <h2>📚 Componenti della Perdita Economica associata all'Emigrazione dei Laureati</h2>
      <p>La letteratura economica individua tre principali componenti nel calcolo dell’impatto economico della fuga di cervelli:</p>

      <h3>1️⃣ Costo di Formazione per Laureato (~100.000 €)</h3>
      <p><strong>Definizione:</strong> valore economico degli investimenti pubblici sostenuti dallo Stato italiano per la formazione di un laureato.</p>
      <ul>
        <li>Criteri di riparto del Fondo di Finanziamento Ordinario (FFO) del Ministero dell’Università (<a href="https://www.mur.gov.it/it/aree-tematiche/universita/programmazione-e-finanziamenti/finanziamenti" target="_blank" rel="noopener noreferrer">MUR</a>).</li>
        <li>Quantificazioni della <em>Corte dei Conti</em> che includono spese per personale, strutture e supporto (<a href="https://www.corteconti.it/download?id=561d9ffa-5d5a-4cc3-90d1-4eca385b3bb4" target="_blank" rel="noopener noreferrer">Corte dei Conti - FFO</a>).</li>
      </ul>
      <p className="total-value"><strong>Stima complessiva:</strong> 100.000 € per laureato</p>

      <h3>2️⃣ Perdita Fiscale Annua (~20.000 €)</h3>
      <p><strong>Definizione:</strong> ammontare di imposte dirette e contributi previdenziali che il laureato avrebbe versato allo Stato qualora avesse esercitato l’attività lavorativa in Italia.</p>
      <ul>
        <li>In Italia, il cuneo fiscale per un dipendente è mediamente pari al 45% del costo del lavoro. Per un costo del lavoro di circa 32.000 €, la componente fiscale e contributiva ammonta a circa 14.700 € (<a href="https://www.istat.it/it/files/2018/12/Report-Reddito-Condizioni-di-vita-2017.pdf" target="_blank" rel="noopener noreferrer">ISTAT</a>).</li>
        <li>Considerando il maggior reddito atteso per i laureati (stimato tra 35.000 € e 40.000 €), si ipotizza una perdita fiscale prudenziale di circa 20.000 € annui per soggetto.</li>
      </ul>
      <p className="total-value"><strong>Stima perdita fiscale annua:</strong> 20.000 € per persona</p>

      <h3>3️⃣ Durata della Carriera all’Estero (~30 anni)</h3>
      <p><strong>Definizione:</strong> periodo lavorativo durante il quale il laureato continua la propria carriera professionale fuori dal territorio italiano.</p>
      <ul>
        <li>Stima basata su una durata media lavorativa europea post-laurea di circa 30 anni, in linea con standard adottati in studi economici internazionali.</li>
      </ul>
      <p className="total-value"><strong>Perdita fiscale complessiva:</strong> 20.000 € × 30 anni = 600.000 €</p>

      <div className="formula-box">
        <h3>🔬 Formula Complessiva di Calcolo</h3>
        <p>Per ciascun laureato emigrato:</p>
        <div className="formula-display">
          Perdita totale = Costo di formazione + Perdita fiscale cumulata<br />
          = 100.000 € + 600.000 € = <strong>700.000 €</strong>
        </div>
      </div>

      <div className="calculation-box">
        <h3>🧮 Calcolo Complessivo su base 2023</h3>
        <p>Numero laureati italiani espatriati nel 2023: <strong>37.114</strong> (Fonte: ISTAT, Tavola 9)</p>
        <p>Perdita stimata per singolo laureato: <strong>700.000 €</strong></p>
        <div className="formula-display">
          37.114 × 700.000 € = <strong>25.979.800.000 €</strong>
        </div>
        <p className="total-value">Perdita complessiva stimata per il 2023: circa 26 miliardi di euro.</p>
      </div>

      <h3>📊 Sintesi delle Stime e delle Fonti</h3>
      <table className="summary-table">
        <thead>
          <tr>
            <th>Parametro</th>
            <th>Valore Stimato</th>
            <th>Fonte</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Costo formazione per laureato</td><td>100.000 €</td><td>MUR, Corte dei Conti</td></tr>
          <tr><td>Perdita fiscale annua</td><td>20.000 €</td><td>ISTAT, stima prudenziale</td></tr>
          <tr><td>Durata carriera all'estero</td><td>30 anni</td><td>Standard economici</td></tr>
          <tr><td>Perdita fiscale totale per laureato</td><td>600.000 €</td><td>Calcolo cumulativo</td></tr>
          <tr><td><strong>Perdita totale per laureato</strong></td><td><strong>700.000 €</strong></td><td></td></tr>
          <tr><td>Laureati emigrati 2023</td><td>37.114</td><td>ISTAT Tavola 9</td></tr>
          <tr><td><strong>Perdita economica complessiva</strong></td><td><strong>~26 miliardi €</strong></td><td></td></tr>
        </tbody>
      </table>

      <h3>🔗 Fonti Principali</h3>
      <ul>
        <li><strong>Ministero Università (MUR):</strong> <a href="https://www.mur.gov.it/it/aree-tematiche/universita/programmazione-e-finanziamenti/finanziamenti" target="_blank" rel="noopener noreferrer">MUR - Finanziamenti</a></li>
        <li><strong>Corte dei Conti:</strong> <a href="https://www.corteconti.it/download?id=561d9ffa-5d5a-4cc3-90d1-4eca385b3bb4" target="_blank" rel="noopener noreferrer">Costo formazione studente</a></li>
        <li><strong>ISTAT:</strong> <a href="https://www.istat.it/it/files/2018/12/Report-Reddito-Condizioni-di-vita-2017.pdf" target="_blank" rel="noopener noreferrer">Reddito e condizioni di vita 2017</a></li>
        <li><strong>Fonti integrative:</strong> OECD, Banca d’Italia</li>
      </ul>

      <h3>📈 Letteratura Comparativa</h3>
      <ul>
        <li>Fondazione Nord-Est: stime tra 20 e 30 miliardi annui.</li>
        <li>SVIMEZ 2022: conferme per il Mezzogiorno.</li>
        <li>Rapporto ISTAT 2023: conferma l’aumento costante dell’espatrio dei laureati.</li>
        <li>Università Bocconi (2021): perdita fiscale stimata 18-22k € annui per laureato emigrato.</li>
      </ul>

      <h2>📥 Fonti per il Numero di Emigrati</h2>

      <h3>1️⃣ Tavola 3 – Emigrazione Totale 2024</h3>
      <p>Fonte ufficiale ISTAT - <a href="https://demo.istat.it" target="_blank" rel="noopener noreferrer">demo.istat.it</a></p>
      <p>Totale emigrati (italiani + stranieri) nel 2024: <strong>190.967</strong></p>

      <h3>2️⃣ Tavola 9 – Emigrazione di Cittadini Italiani e Laureati 2023</h3>
      <p>Fonte ISTAT Tavola 9 (serie storiche interne) → italiani emigrati 2023: <strong>114.057</strong>; laureati: <strong>37.114</strong>.</p>

      <h2>📅 Metodo di Calcolo del Dato in Tempo Reale</h2>
      <ol>
        <li><strong>Secondi in un anno:</strong> 365 × 24 × 60 × 60 = 31.536.000 secondi.</li>
        <li><strong>Tasso medio per secondo:</strong>  
          <ul>
            <li>Totale: 190.967 / 31.536.000 ≈ 0,00606 emigrati/sec</li>
            <li>Italiani: 114.057 / 31.536.000 ≈ 0,00362 emigrati/sec</li>
            <li>Laureati: 37.114 / 31.536.000 ≈ 0,00118 emigrati/sec</li>
          </ul>
        </li>
        <li><strong>Proiezione cumulativa:</strong> valore attuale = tasso × secondi trascorsi dal 1° gennaio 2025.</li>
      </ol>
        </>
      )}
    </div>
  );
};

export default Explanation;
