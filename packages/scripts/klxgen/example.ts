
interface ClientPayload {
  id: number;
}


interface Client {
  id: number;
}

// exp:{path: '/client/{id}', method: 'GET'}
function getClient(id : number) : Client {
  return {id: 3}
}


// exp:{path: '/client/{id}', method: 'POST'}
function saveClient(id : number, payload : ClientPayload) : Client {
  return {id: 3}
}