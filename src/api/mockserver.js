import { createServer, Model } from 'miragejs';

let data1 = [];
let data = [
  {
   "id" : 1,
   "name" : "DeviceToLovePopó",
   "status" : "working",
   "batteryDto": {
    "id" : 1,
    "name" : "battery1",
    "voltage" : 3.7,
    "colorcode" : "#008000"
  }
  },
  {
    "id" : 2,
   "name" : "Device2",
   "status" : "working",
   "batteryDto": {
     "id" : 1,
     "name" : "battery2",
     "voltage" : 3.6,
     "colorcode" : "#FF0000"
   }
},
{
    "id" : 3,
   "name" : "Device3",
   "status" : "Not Responding",
   "batteryDto": {
     "id" : 1,
     "name" : "battery2",
     "voltage" : null,
     "colorcode" : "#FF8000"
   }
}
]

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      client: Model,
    },
    seeds(server) { },
    routes() {
      this.namespace = '/api';
      this.timing = 2000

      this.get('/deviceOverView/page', (schema, request) => {
        const search = request.queryParams.search
       // return data.filter(client => client.name.includes(search))
       return data;
      });

      this.post('/pets', (schema, request) => {
        let { name, isVaccinated } = JSON.parse(request.requestBody);
        data.forEach(c => {
          c.pets.forEach(p => {
            if (p.name === name) p.isVaccinated = isVaccinated
          })
        })
        return { success: true }
      });
    },
  });
  return server;
}