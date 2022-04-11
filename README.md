### Env Variables

Create a .env file in root

<!-- Content -->

NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id

### Install Node Package (client & server)

npm install
cd client
npm install

### Load Database

npm run data:import

npm run data:destroy

### Run

npm run dev

# Just run server

npm run server

Account example

admin@example.com (Admin)
123456

duycute@example.com (Customer)
123456

duydeptrai@example.com (Customer)
123456
