import React from "react";
import "./TutorialScreen.css";
import "../../styles/globalStyles.css";

type TutorialScreenProps = {
  scrollToGame: () => void;
}

//Represents the entire tutorial screen
const TutorialScreen = ({ scrollToGame }: TutorialScreenProps) => {
  return (
    <div className="screen-container">
      <h1 className="page-title">Anleitung</h1>
      <div className="tutorial-page-rules-container">
        <p className="page-text">
          Willkommen zum Nim-Spiel!
          <br />
          <br />
          Das Spiel beginnt mit einem Haufen von 13 Streichhölzern. Die Spieler
          wechseln sich ab und ziehen jeweils 1, 2 oder 3 Streichhölzer aus dem
          Haufen. Doch Vorsicht: Derjenige, der das letzte Streichholz zieht,
          verliert das Spiel. Also sei schlau und plane deine Züge strategisch,
          um deinem Gegner keine Chance zu lassen!
          <br />
          <br />
          Um das Spiel noch spannender zu gestalten, kannst du zwischen zwei
          Schwierigkeitsgraden wählen: "leicht" und "schwer".
          <br />
          Im 'leichten' Modus zieht der Computer zufällig zwischen 1 und 3
          Streichhölzern. Er agiert nicht gewinnorientiert, sondern macht
          einfach zufällige Züge. Das gibt dir die Möglichkeit, das Spiel zu
          genießen und dich mit den Grundlagen vertraut zu machen.
          <br />
          Im "schweren" Modus hingegen wird der Computer zu einem knallharten
          Gegner. Er plant sorgfältig jeden Zug, um eine Strategie zu entwickeln
          und das Spiel zu gewinnen. Sei gewarnt: Er wird versuchen, dir das
          letzte Streichholz zu überlassen und dich in die Misère zu führen.
          <br />
          <br />
          Bist du bereit für diese ultimative Herausforderung? Also, worauf
          wartest du? Wähle deinen Schwierigkeitsgrad und tritt gegen den
          cleveren Computer an. Zeige dein strategisches Geschick und werde zum
          Meister des Nim-Spiels!
        </p>
      </div>
      <button onClick={scrollToGame}>Auf zum Spiel!</button>
    </div>
  );
};

export default TutorialScreen;
