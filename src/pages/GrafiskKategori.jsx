import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { hamtaKategori } from "../data/grafiskaProjekt";
import "./GrafiskaProjekt.css";

const ANTAL_PER_SIDA = 24;

function GrafiskKategori() {
  const { slug } = useParams();
  const [kategori, setKategori] = useState(null);
  const [status, setStatus] = useState("loading");
  const [antalSynliga, setAntalSynliga] = useState(ANTAL_PER_SIDA);
  const [valtVerk, setValtVerk] = useState(null);
  const dialogRef = useRef(null);
  const bildIndex = kategori?.items.findIndex((verk) => verk.id === valtVerk?.id) ?? -1;
  const forraVerket = bildIndex > 0 ? kategori.items[bildIndex - 1] : null;
  const nastaVerket = bildIndex < kategori?.items.length - 1 ? kategori.items[bildIndex + 1] : null;

  useEffect(() => {
    async function fetchKategori() {
      setStatus("loading");
      setAntalSynliga(ANTAL_PER_SIDA);

      try {
        setKategori(await hamtaKategori(slug));
        setStatus("klar");
      } catch (fel) {
        setStatus(fel.status === 404 ? "saknas" : "fel");
      }
    }

    fetchKategori();
  }, [slug]);

  useEffect(() => {
    function hanteraPiltangenter(event) {
      if (!dialogRef.current?.open) return;
      if (event.key === "ArrowLeft" && forraVerket) {
        event.preventDefault();
        setValtVerk(forraVerket);
      }
      if (event.key === "ArrowRight" && nastaVerket) {
        event.preventDefault();
        setValtVerk(nastaVerket);
      }
    }

    window.addEventListener("keydown", hanteraPiltangenter);
    return () => window.removeEventListener("keydown", hanteraPiltangenter);
  }, [forraVerket, nastaVerket]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (valtVerk && !dialog.open) {
      dialog.showModal();
    } else if (!valtVerk && dialog.open) {
      dialog.close();
    }
  }, [valtVerk]);

  if (status !== "klar") {
    return (
      <main className="grafiska-sida">
        {status === "loading" && <p>Hämtar bilder...</p>}
        {status === "saknas" && <p role="alert">Kategorin kunde inte hittas.</p>}
        {status === "fel" && (
          <p role="alert">Får inget svar från servern. Är den igång?</p>
        )}
        {status !== "loading" && (
          <Link className="grafisk-tillbaka" to="/grafiska-projekt">
            Till alla kategorier
          </Link>
        )}
      </main>
    );
  }

  const synligaVerk = kategori.items.slice(0, antalSynliga);

  return (
    <main className="grafiska-sida">
      <Link className="grafisk-tillbaka" to="/grafiska-projekt">
        ← Alla kategorier
      </Link>
      <header className="grafiska-intro">
        <p className="grafiska-overrad">Grafiska projekt</p>
        <h1>{kategori.name}</h1>
        <p>{kategori.count} bilder i kategorin.</p>
      </header>

      <div className="grafiska-galleri">
        {synligaVerk.map((verk) => (
          <figure className="grafiskt-verk" key={verk.id}>
            <button
              className="grafiskt-verk-knapp"
              type="button"
              onClick={() => setValtVerk(verk)}
            >
              <img src={verk.thumbnailUrl} alt={verk.title} loading="lazy" />
            </button>
            <figcaption className="grafiskt-verk-info">{verk.title}</figcaption>
          </figure>
        ))}
      </div>

      {antalSynliga < kategori.items.length && (
        <button
          className="grafisk-visa-fler"
          type="button"
          onClick={() => setAntalSynliga((antal) => antal + ANTAL_PER_SIDA)}
        >
          Visa fler
        </button>
      )}

      <dialog
        className="grafisk-dialog"
        ref={dialogRef}
        aria-label={valtVerk ? valtVerk.title : "Förstorad bild"}
        onClose={() => setValtVerk(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setValtVerk(null);
        }}
      >
        {valtVerk && (
          <>
            <div className="grafisk-dialog-bildrad">
              <button
                className="grafisk-dialog-pil"
                type="button"
                aria-label="Visa föregående bild"
                disabled={!forraVerket}
                onClick={() => setValtVerk(forraVerket)}
              >
                ‹
              </button>
              <img src={valtVerk.originalUrl} alt={valtVerk.title} />
              <button
                className="grafisk-dialog-pil"
                type="button"
                aria-label="Visa nästa bild"
                disabled={!nastaVerket}
                onClick={() => setValtVerk(nastaVerket)}
              >
                ›
              </button>
            </div>
            <div className="grafisk-dialog-info">
              <p>{valtVerk.title} ({bildIndex + 1} av {kategori.items.length})</p>
              <button
                className="grafisk-dialog-stang"
                type="button"
                onClick={() => setValtVerk(null)}
              >
                Stäng
              </button>
            </div>
          </>
        )}
      </dialog>
    </main>
  );
}

export default GrafiskKategori;
