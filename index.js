// Import collections (Products, Customers, Orders)
const products = require('./products.json');
const customers = require('./customers.json');
const orders = require('./orders.json');

// import tools
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

//import our credentials
const credentials = require('./credentials.json');

//connect to FireBase services
initializeApp({
    credential: cert(credentials)
});

// connect to Firestore
const db = getFirestore();

// create collections called "products" "customers" "restaurants"
const productsCol = db.collection('products')
const customersCol = db.collection('customers')
const ordersCol = db.collection('orders')

// add item to products collection
// productsCol.add(products[0])
// .then(doc => [
//     console.log('Added product', doc.id)
// ])
// .catch(er => [
//     console.log(err)
// ]);

// productsCol.add(products[1])
// .then(doc => [
//     console.log('Added product', doc.id)
// ])
// .catch(er => [
//     console.log(err)
// ]);

// productsCol.add(products[2])
// .then(doc => [
//     console.log('Added product', doc.id)
// ])
// .catch(er => [
//     console.log(err)
// ]);


// add customer to customers collection
// customersCol.add(customers[0])
// .then(doc => [
//     console.log('Added customer', doc.id)
// ])
// .catch(er => [
//     console.log(err)
// ]);

// customersCol.add(customers[1])
// .then(doc => [
//     console.log('Added customer', doc.id)
// ])
// .catch(er => [
//     console.log(err)
// ]);

// customersCol.add(customers[2])
// .then(doc => [
//     console.log('Added customer', doc.id)
// ])
// .catch(er => [
//     console.log(err)
// ]);

//add orders to orders collection
// ordersCol.add(orders[0])
// .then(doc => [
//     console.log('Added order', doc.id)
// ])
// .catch(er => [
//     console.log(err)
// ]);

// ordersCol.add(orders[1])
// .then(doc => [
//     console.log('Added order', doc.id)
// ])
// .catch(er => [
//     console.log(err)
// ]);

// ordersCol.add(orders[2])
// .then(doc => [
//     console.log('Added order', doc.id)
// ])
// .catch(er => [
//     console.log(err)
// ]);


// read one document
productsCol.doc('').get()
  .then(doc => {
    console.log(doc.id, ' => ', doc.data());
  })
  .catch(err => console.error(err));

// get all documents
// restRef.get()
//   .then(snapshot => {
//     snapshot.forEach(doc => {
//       console.log(doc.id, ' ===> ', doc.data());
//     })
//   })
//   .catch(console.error);

// read a collection
customersCol.get()
  .then(doc => {
    console.log(doc);
  })
  .catch(err => console.error(err));