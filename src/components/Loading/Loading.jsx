import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

export const Loading = () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });
  return (
    <div className="loading">
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        audioContext={audioContext}
        playNote={() => {}}
        stopNote={() => {}}
        width={1000}
        keyboardShortcuts={keyboardShortcuts}
      />
    </div>
  );
};
