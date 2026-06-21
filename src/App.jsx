
import { useState } from "react";
import "./App.css"

const initialSports = [
  { id: 1, name: 'football', label: 'FootBall', emoji: '⚽', members: [] },
  { id: 2, name: 'basketball', label: 'BasketBall', emoji: '🏀', members: [] },
  { id: 3, name: 'volleyball', label: 'VolleyBall', emoji: '🏐', members: [] },
];

function App() {
  const [sports, setSports] = useState(initialSports);
  const [userName, setUserName] = useState('');
  const [selectedSport, setSelectedSport] = useState('football');

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!userName.trim()) return;

    const updatedSports = sports.map((sport) => {
      if (sport.name === selectedSport) {
        return { ...sport, members: [...sport.members, userName] };
      }
      return sport;
    });

    setSports(updatedSports);
    setUserName(''); 
  };

  return (
    <>
      <h1 className="title">Sport</h1>
      
      <select 
        value={selectedSport} 
        onChange={(e) => setSelectedSport(e.target.value)}
        name="squad" 
        id="squad-select" 
        required
      >
        <option value="football">⚽FootBall</option>
        <option value="basketball">🏀BasketBall</option>
        <option value="volleyball">🏐VolleyBall</option>
      </select>

      <form className="form" onSubmit={handleAddMember}>
        <input 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
          type="text" 
          placeholder="Введите свое имя" 
        />
        <button type="submit">Добавить</button>
      </form>

      <div className="game">
        {sports.map((sport) => (
          <div key={sport.id} className={sport.name}>
            <ul className="football__ul">
              <li>{sport.emoji}{sport.label}</li>
              {sport.members.length > 0 ? (
                sport.members.map((name, index) => (
                  <li key={index}>{index + 1}. {name}</li>
                ))
              ) : (
                <li>Be the first to join!</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;