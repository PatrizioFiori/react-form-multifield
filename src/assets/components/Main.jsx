import { useState, useEffect } from "react"

const Main = () => {

    const [articoli, setArticoli] = useState({
        autore: "",
        titolo: "",
        data: "",
        contenuto: "",
        argomento: "",
    });

    const [artPubblicati, setArtPubblicati] = useState([]);

    const handlerChange = (event) => {
        setArticoli({ ...articoli, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setArtPubblicati([...artPubblicati, articoli]);
        setArticoli({ autore: "", titolo: "", data: "", contenuto: "", argomento: "" });
    };

    const handlerDelete = (indexDaRimuovere) => {
        setArtPubblicati(artPubblicati.filter((_, index) => index !== indexDaRimuovere));
    };

    return (
        <div>
            <div className='text-center py-3'>
                <div className="container">
                    <div className="row">
                        {/* Colonna inserimento form */}
                        <div className="col-4 bg-light border">
                            <h5>Inserisci articolo</h5>
                            <form className="formArticolo d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                                <p>Titolo</p>
                                <input type="text" name="titolo" value={articoli.titolo} onChange={handlerChange} />
                                <br />

                                <p>Autore</p>
                                <input type="text" name="autore" value={articoli.autore} onChange={handlerChange} />
                                <br />

                                <p>Data pubblicazione</p>
                                <input type="date" name="data" value={articoli.data} onChange={handlerChange} />
                                <br />

                                <p>Contenuto</p>
                                <textarea name="contenuto" value={articoli.contenuto} onChange={handlerChange} />
                                <br />

                                <p>Argomento</p>
                                <select name="argomento" value={articoli.argomento} onChange={handlerChange}>
                                    <option value="">Selezione argomento</option>
                                    <option value="01">Argomento-1</option>
                                    <option value="02">Argomento-2</option>
                                    <option value="03">Argomento-3</option>
                                    <option value="04">Argomento-4</option>
                                </select>
                                <br />

                                <button className="text-bg-info p-2 rounded" type="submit">Invia Articolo</button>
                                <br />
                            </form>
                        </div>

                        {/* Colonna contenuto principale */}
                        <div className="col-8">
                            <h1>Articoli pubblicati</h1>
                            <ul className="list-unstyled">
                                {artPubblicati.map((articolo, index) => (
                                    <li key={index} className="border">
                                        <h4>{articolo.titolo}</h4>
                                        <br />
                                        <p><strong>Autore:</strong> {articolo.autore}</p>
                                        <p><strong>Data:</strong> {articolo.data}</p>
                                        <p>{articolo.contenuto}</p>
                                        <p><strong>Argomento:</strong> {articolo.argomento}</p>
                                        <button
                                            key={index}
                                            className="rounded mb-1 mx-1 text-bg-danger"
                                            type="delete"
                                            onClick={() => handlerDelete(index)}
                                        >Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main