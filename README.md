## Chuc nang

- Full chac nang san pham
- Danh gia san pham
- Thong tin khach hang
- Quan ly admin
- Thanh toan
- Database

### Them file .evn

root/.evn , xoa .example

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Khoi chay

```
/root/
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

### Load Database

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
User mau

admin@gmail.com (Admin)
123456

duycute@gmail.com (Customer)
123456

duydeptrai@gmail.com (Customer)
123456
```
