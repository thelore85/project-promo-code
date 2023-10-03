




// ------------------------------------------------

//////////////////////////////////////////////////////
// ---------- PROMO CODE - NEW LEAD API --------------
//
// - CONNECT TO HUBSPOT API TO GENERATE THE LEAD 
///////////////////////////////////////////////////////




/////////////////////////////////////////////
// SET HUSPOT APP connection
const YOUR_TOKEN = 'pat-eu1-a8e0e93a-5a87-458d-85e4-b9483366e03f'; // use your token
const apiUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';


////////////////////////////////////////
// PUSH DATA TO API
  
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${YOUR_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        email: 'marco@test6.it',
        firstname: 'marco', // Nome del contatto (potresti voler utilizzare 'firstname' invece di 'name')
        promo_code: 'ABC12',
      },
    })

  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Errore nella risposta del server');
      }
      return response.json();
    })
    .then((data) => {
      // Gestisci la risposta API qui
      console.log('Dati ricevuti:', data.results);
    })
    .catch((error) => {
      // Gestisci gli errori qui
      console.error('Si è verificato un errore durante la richiesta API:', error);
    });





