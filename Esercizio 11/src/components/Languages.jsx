import { useState } from "react";

function Languages() {
    const [lang, setLang] = useState("");
    const languages = {
        italiano: "Buongiorno",
        inglese: "Goodmorning",
        francese: "Bonjour"
    }
    return (
        <>
            <div>
                <select value={lang} onChange={(event) => setLang(event.target.value)}>
                    <option value="italiano">Italiano</option>
                    <option value="inglese">Inglese</option>
                    <option value="francese">Francese</option>
                </select>
            </div>
            <h1>{languages[lang]}</h1>
        </>
    )
};
export default Languages;