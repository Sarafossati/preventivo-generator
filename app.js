const getNomeCognome = () => {

    let nome = itemUpperCase(document.getElementById("nome").value);
    let cognome = itemUpperCase(document.getElementById("cognome").value);
    let nomeazienda = itemUpperCase(document.getElementById("nomeazienda").value);
    let nomeCognomeAzienda = nome + " " + cognome + " " + nomeazienda;

    addInHtml("valueCliente", nomeCognomeAzienda)
}

const getFatturazione = () => {

    let indirizzo = itemUpperCase(document.getElementById("indirizzo").value);
    let civico = document.getElementById("civico").value;
    let citta = itemUpperCase(document.getElementById("citta").value);
    let cap = document.getElementById("cap").value;
    let provincia = (document.getElementById("provincia").value).toUpperCase();
    let fatturazione = indirizzo + ", " + civico + ". " + citta + " - " + cap + " - (" + provincia + ").";

    addInHtml("valueFatturazione", fatturazione)
}

const getIva = () => {

    let iva = "P.Iva: " + (document.getElementById("iva").value);

    addInHtml("valueIva", iva)
}

const getCf = () => {

    let cf = "CF:" + (document.getElementById("cf").value).toUpperCase();

    addInHtml("valueCf", cf)
}

// FIRT LETTER UPPERCASE
const itemUpperCase = (item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
}

// ADD ELEMENT IN HTML
const addInHtml = (element, elementHtml) => {
    return document.getElementById(element).innerHTML = (elementHtml)
}


