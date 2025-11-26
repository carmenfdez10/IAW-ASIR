import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import styles from "./aside.module.css";

interface Heroe {
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

const Aside = () => {
  const [heroes, setHeroes] = useState<Heroe[]>([]);
  const [selectedHero, setSelectedHero] = useState<Heroe | null>(null);

  useEffect(() => {
    fetch("(../../../../heroes.json")
      .then((res) => res.json())
      .then((data) => {
        // Filtrar solo Marvel
        const marvelHeroes = data.filter(
          (hero: Heroe) => hero.publisher === "Marvel Comics"
        );
        setHeroes(marvelHeroes);
      });
  }, []);

  return (
    <aside className={styles.aside}>
      <h2 className={styles.title}>Héroes Marvel</h2>

      <Autocomplete
        options={heroes}
        getOptionLabel={(h) => h.superhero}
        onChange={(_, value) => setSelectedHero(value)}
        renderInput={(params) => (
          <TextField {...params} label="Selecciona un héroe" size="small" />
        )}
      />

      {selectedHero && (
        <div className={styles.info}>
          <h3>{selectedHero.superhero}</h3>
          <p><strong>Alter Ego:</strong> {selectedHero.alter_ego}</p>
          <p><strong>Primera aparición:</strong> {selectedHero.first_appearance}</p>
          <p><strong>Personajes:</strong> {selectedHero.characters}</p>
        </div>
      )}
    </aside>
  );
};

export default Aside;