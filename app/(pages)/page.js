import { redirect } from 'next/navigation'

export default function Home() {
  return (  redirect('/tow') )
}


// import Hero from '../Components/Hero/Hero.js'
// import Main from '../Components/Main/Main.js'
// import Form from '../Components/Form/Form.js'
// import Footer from '../Components/Footer/Footer.js'
// import Carousel from '../Components/Carousel/Carousel.js';

// export default function Home() {
//   return (
//         <>
//           <Hero />
//           <Main />
//           <Form />
//           <Carousel />
//           <Footer />
//         </>
//   )
// }



///////////////////////////////////////
// TO DO LIST: DEVELOPING FEATURE


// - DB: project_promo_account (accountId - accountName - name - lastName - email - phone - psw - n.leads - contratto)
// - DB: project_promo_service (serviceId - email - service(eg: landing, blog, ...) - title - promoCode - promo start - promo end - prezzo - link - status(pending, Live, ...) - listname - clientname )

// - APP: login feature (psw encripted, recupero psw, )
// - APP: admin board - to manage service requests and status

// - HS: verificare come 'pushare' i dati del db dentro HS in maniera automatica.
// - HS: aggiungere campi contatto: citta' - settore - tipologia (consumatore, info, ...)







///////////////////////////////////
///////////////////////////////////
// ----------------------------- //
// CONTRATTO SERVIZIO PIQUS LEAD //
///////////////////////////////////
///////////////////////////////////






////////////////////////////////
// PARTI COINVOLTE

// - Il titolare: proprietario della landing page e della piattaforma
// - il cliente: brand o servizio sponsorizzato, sottoscrittore del contratto.
// - Gli utenti: visitatori della landing page
// - lead o contatti: un utente che compila il form di contatto
// - il servizio: 'piqus lead'


///////////////////////////////////////////
// SOTTOSCRIZIONE DEL CONTATTO

// - il seguente contratto regola il rapporto tra il titolare e il cliente in merito al servizio 'piqus lead'
// - il presente contratto e' sottoposto in fase di creazione dell'account 'piqus lied' attraverso la piattaforma raggiungibile dal sito 'lead.piqus.it'
// - attivando l'account, si considera sottoscritto il presente contratto.
// - il presente contratto ha validita' di 12 mesi e si rinnovera' automaticamebte per mantenere continuita' di servizio. Il cliente puo' interrompere la sua efficacia in qualsiasi momento inviando una mail a supporto@piqus.it o direttamebte dalla piattaforma nel pannello di amministrazione.


///////////////////////////////////////
// DESCRIZIONE DEL SERVIZIO 'piqus lead'

// creazione di landing page o strumenti web finalizzati alla generazione di contatti (lead).

// modello di servizio 'a perfomance': quanto piu' il cliente genera lead, tanto piu' ha diritto ai servizi descritti nel tear di riferimento come descritto nel seguente contratto
// il modello di servizio si divide in 4 livelli: 'tear light', 'tear basic', 'tear premium', 'tear platinum';
// Non e' possibile sottoscriversi a un 'tear' pagando. pertanto non sono richiesti dati di pagamento o fatturazione per la generazione dell'account.
// il servizio 'Piqus lead' si attiva semplicemente con la creazione di un account dal sito 'www.lead.piqus.it';
// al cliente viene attribuito il 'tear: light' di default;
// il cliente verra' contattato direttamente per raccogliere le informazioni necessarie a ceare il materiale porposto nel 'tear: light';

// Per completezza viene inseirto a valle di questo contratto il listino per i servizi offerti in modo indipendente.
// E' possibile altresi' richiedere servizi specifici a pagamento. in questo caso il titolare gestira' in maniera indipendente la richiesta che quindi esula da questo contratto.



//////////////////////////////////////
// GESTIONE DEI LEAD GENERATI - CRM (Customer Relationship Management)

// -  i dati dei contatti verranno salvati in un crm partner del titolare. i dati sono di proprieta' del titolare. 
// -  i contatti nel crm sono divisi per liste associate ai vari clienti del titolare. Il titolare garantisce l'assegnazione del lead del cliente alla sua lista privata.
// -  il cliente non puo' disporre direttamente dei dati dei contatti, ma puo' ingaggiare il titolare per azioni di marketing sulla lista a lui dedicata, secondo le modalita' indicate nel presente acccordo.
// -  Il cliente non potra' richiedere manipolazioni o elaborazioni dei dati associata alla sua lista.
// -  in caso di scadenza o mancato rinnovo del contratto di sottoscrizione, i lead sono e rimangono a disposizione del titolare 




/////////////////////////////////////////////
// LIGHT TEAR - up to 500 lead

// -  1 landing page: design, sviluppo e messa online gratis della prima landing page promozionale. Versione standard (sezioni della pagina: header, promo message, form, footer)
// -  1 mail automatica: personalizzazione mail di risposta all'utente
// -  1 invio mail/anno: verso la lista contatti generata
// -  pannello admin: accesso al pannello di amministrazione
// -  account - supporto limitato alla consulenza cretiva per i materiali in elenco





///////////////////////////////////////////////////////////
// BASIC TEAR - up to 2000 lead

// -  on top ai tears inferiori -
// -  mail promo/mese - creativita' e sviluppo mail promozionale da inciare alla lista
// -  mail - creativita' e invio: GRATIS se il ciente ha generato 100 lead valide nei 30 giorni precedenti)
// -  mail - i contatti sono considerati validi se il CRM conferma l'invio. la fattura verra' staccata a consuntivo.





/////////////////////////////////////////////////////////////
// PREMIUM TEAR - up to 5000 lead

// -  on top ai tears inferiori -
// -  Sviluppo minisito: fino a 5 pagine (blog escluso)
// -  landing page: design personalizzato fina a 10 sezioni oltre a sviluppo e messa online
// -  promo code univoco: generazine di codice univoco per ogni lead.
// -  tool di controllo e applicazione: attivazione del tool di controllo del codice univoco 





/////////////////////////////////////////////////////
// PLATINUM TEAR - on top ai tears inferiori - 10.000

// -  on top ai tears inferiori -
// -  1 minisito/una tantum: fino a 5 pagine
// -  1 blog/una tantum: con CMS dedicato;
// -  12 email/anno
// -  CRM dedicato: accesso ai dati in conproprieta'.
// -  landing page: design personalizzato fina a 10 sezioni oltre a sviluppo e messa online





/////////////////////////////////////////////
// listino - si possono realizzare in maniera indipendente alla sottoscrizione i seguenti servizi

// - minisito: 1200 euro (up to 5 pages);
// - blog: 700 euro (con CMS dedicato);
// - landing page: 300 euro;
// - promo code univoco: 400 euro;
// - CRM dedicato: 400 euro;
// - Email promo: copy + design + develope + invio: 100 euro;
// - revisione exrta: 65 euro/ora;
// - training/consultancy: cms, strategy, marketing: 100 euro/ora;




/////////////////////////////////
// MODALITA' DI COLLABORAZIONE

// -  Brief: il cliente potra' prenotare il suo elaborato (eg: email promo, landing page, etc ..)direttamente dal pannello di amministrazione secondo le modalita' descritte in piattaforma. A seconda dell'elaborato richiesto possono variare le modalita' di collaborazione.
// -  Revisione: per tutti gli elaborati e' prevista solo una revisione (brief del cliente -> design -> call di 30 min con il cliente per revisione -> invio).  
