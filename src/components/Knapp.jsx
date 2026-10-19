import './Knapp.css';

function Knapp({ text, lank }) {
  return (
    <a className="knapp" href={lank}>
      {text}
    </a>
  );
}

export default Knapp;