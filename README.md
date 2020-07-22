# Earn your Stripes
Welcome to the one stop shop for $14 Frosted Flakes. This is a Stripe take home interview question. Here are the instructions for the README (this file):
 ```
Please provide instructions for the reviewer of how they should
set up and test your implementation -- assume your reviewer has no experience in the
language / framework that you choose
```

## Overview
This is a React app with a Node backend. It was heavily influenced and mostly copied from the [Integration Builder Stripe tutorial](https://stripe.com/docs/payments/integration-builder). Read more about the journey in my Friction log.


## Running the app

1. Build the application

```npm install```

 2. Run the application

```npm start```

3. Go to [localhost:3000/checkout](localhost:3000/checkout) (this should open automatically)

## Notes & Tips
* You have to refresh the page everytime you start the application to get it to load. This was an issue with a fresh download of the tutorial so honestly it's a bug on Stripe's end from what I can tell.

* Successful payments are appended to the `successful_orders.log` file with a timestamp.

* The Node backend runs on port 4242 and the React frontend runs on port 3000.

* To help debug/test you can use the Stripe CLI ([instructions](https://stripe.com/docs/payments/handling-payment-events#build-your-own-webhook)).
To check Webhooks: `stripe listen --forward-to http://localhost:4242/webhook`
To simulate successful PaymentIntents (and see the `successful_orders.log` file grow): stripe trigger payment_intent.succeeded

* The standard test cases for payment intents can be found [here](https://stripe.com/docs/payments/accept-a-payment#web-test-integration).
