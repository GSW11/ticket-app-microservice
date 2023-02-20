import request from 'supertest'
import { app } from '../../app'
import signin from '../../test/signin'

const createTicket = () => {
  console.log(request(app).post('/api/tickets').set('Cookie', signin()))
  return request(app).post('/api/tickets').set('Cookie', signin()).send({
    title: 'asldkf',
    price: 20,
  });
};

it('can fetch a list of tickets', async () => {
  await createTicket();
  await createTicket();
  await createTicket();

  const response = await request(app).get('/api/tickets').send().expect(200);

  expect(response.body.length).toEqual(3);
});
