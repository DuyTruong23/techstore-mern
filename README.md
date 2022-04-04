## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (client & server)

```
npm install
cd client
npm install
```

### Run

```
# Run client (:3000) & server (:5000)
npm run dev

# Run server only
npm run server
```

## Build & Deploy

```
# Create client prod build
cd client
npm run build
```

### Seed Database

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@gmail.com (Admin)
123456

duycute@gmail.com (Customer)
123456

duydeptrai@gmail.com (Customer)
123456
```
