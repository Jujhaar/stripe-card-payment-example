# Friction Log
"A friction log is a document that details your experience using the product. It should cover what was good about the experience, while
focusing on all the places where the product experience could've been improved, both from a user and your perspective."

## Overview
I used three main resources to get this project done:
1. The docs provided and linked at https://stripe.com/docs/payments/accept-a-payment
2. The stripe-samples github repo at https://github.com/stripe-samples/accept-a-card-payment
3. The integration builder (this was by far the most useful): https://stripe.com/docs/payments/integration-builder

I'll summarize my key takeaways and then write chronologically about my experience from the perspective of an impatient developer.

✅ denotes a good experience

❌ denotes an area I was frustrated by, generally followed by a few quick ideas.

🐛 indicates a bug I found.

## Key Takeaways
In this section I'll highlight the takeaways in rough impact order.

### Friction:
* The webhook endpoint is not integrated with the create-payment-intents endpoint in the docs leading to a clash in how they are parsed. See Log 13.
* Discovering the right tutorial/docs for my use case was difficult because the options are not shown consistently. See Log 3.
* The docs are not responsive when window size changes. See Log 2.

Ouside of the PaymentIntent docs:
* The dashboard is not a good use of space for new accounts and made me lose confidence in their accuracy. See Log 6.
* Having to create an entirely new account with unique password needs creates friction. See Log 5.

### Bugs:
* Webhooks issue noted above. See Log 13.
* Some of the code is not able to be copied correctly in the language of choice. See Log 14.
* There continue to be prompts to sign in to see test keys after a user has signed in. See Log 7.

### Delight:
* The integration builder was the single most useful tool I found.
* The Stripe CLI made testing webhooks and payment integrations easy.
* Prefilled API keys. What an easy but impactful feature.
* Selecting and persisting platform and code language preferences.


## Log
1. I first set up a React app using create-react-app.

2. ❌ I opened the docs on the left side of my screen and terminal on the right side. I use a 15" Macbook Pro. The docs window cuts off much of the content if it is not most of the screen. This is an issue as developers want their code on one side and the docs on the other to go back and forth between them. This issue is even more important today - most of us don't have the luxury of mulitple screens at home during Covid.
Throughout my journey, I frequently tried to move the docs left and right. On the mac, tracking left and right when the page doesn't respond takes you "back" or "forward", adding to the frustration when trying to navigate. I looked at the mobile view hoping there would be a better experience - it's the same, but my guess is most developers looking at the docs are going through this on their computers. Two immediate fixes come to mind - ability to scroll left to right on the docs pages and collapsing the left side bar at a certain screen size.

3. ❌ Although I loved the "What you're building" section right up top, along with a diagram of the overall flow. The "Clone from GitHub" callout is nice, but I think the first thing we should tell devs is their options on this adventure. The integration builder, which I found the most helpful, was not something I even noticed on my first few passes. Cloning an existing repo (or at the least reading through it) is the impatient developer's bread and butter. I would _clearly_ and _consistently_ denote the potential paths right at the beginning. That way with a click they can explore all three and choose the right one for them. This may seem simple, but has huge implications. Once at Airbnb I increased our help article efficacy by 15% by simply making the search bar at the top of the page more visible and bigger.

4. ✅ I love that I can choose my platform at the top and my language in the sections and it changes and persists all examples with a beautiful animation.

5. ❌ I need to set up a whole new account for Stripe. This is friction - I need to create a new, strong password that is unique and store it. The requirements are different from most accounts (10 chars instead of numbers, letters, special characters) which means now I need a completely unique password.
This might be unavoidable due to the secure nature of Stripe. I'd love to know 1) why the requirements are the way they are, 2) why we can't use another authentification method (e.g. Sign in with Google, Facebook, etc.), and 3) if we can add a "keep me signed in" checkbox to make sure the lazier ones of us don't need to remember the password forever.

6. ❌ The Stripe dashboard I get to after signing up somehow has values on the graph when I haven't set anything up. Why? We probably shouldn't show dashboards until they are relevant - there is tons of material we can show to a new user before dashbaords are relevant.

7. ✅ 🐛 Prefilled test keys. I love that idea because it doesn't take me out of the context of my work. Unfortunately, the tooltip that was so useful before I signed in continues to say "Sign in to see examples pre-filled with your test keys." even after I've signed in.

8. Side-bar: I did a search for `Stripe PaymentIntent tutorial` and the first hit was not Stripe, it was https://fireship.io/lessons/stripe-payment-intents-tutorial/. We can learn a lot from what cusomters are doing instead of using our docs.

9. ❌ The way the docs are structured is not iterative. For example, I put a "CheckoutForm" element in the `collect card details` step even though it's not defined until the next portion, `submit the payment to stripe`. I would order the docs in a way that starts with the easiest pieces first - the frontend React app. After that, we can talk about how to test the server. That said, this may be how most users think and I'm just different.

10. Nit: Bold this text:
```
The client secret should still be handled carefully because it can complete the charge. Do not log it, embed it in URLs, or expose it to anyone but the customer.
```
It's important that it's clear.

11. ✅ This whole process was a struggle, because I didn't understand how the different snippets interacted with one another. <strong>Finding the [integration builder](https://stripe.com/docs/payments/integration-builder) was a gamechanger.</strong> This was easy to copy and setup, took me through the process holistically, and had a small number of files that worked together to get the job done.

12. ✅ I was able to use the integration builder and tweak files to locally set up the payments and try the test cases. The [integration examples](https://stripe.com/docs/payments/accept-a-payment#web-test-integration) on the site and example credit cards are _amazing_ and help so much with development and confidence that I'm building for all sorts of use cases. Testing in the payments world is always so dangerous and nerve-wracking, so test cards are essential. And the `42` touch is a nice one for developers - it shows you "get it".

13. ❌ 🐛 Webhooks were a bear to set up and there are two major reasons for this: 1) We need the raw body for verifying webhooks, but all examples of the `create-payment-intent` endpoint convert to JSON. 2) The examples _aren't consistent with how they reflect this_. In the docs, the example for the [payment intent endpoint](https://stripe.com/docs/payments/accept-a-payment#web-create-payment-intent) has a different setup than the [webhook endpoint](https://stripe.com/docs/payments/handling-payment-events#create-webhook). I wasn't sure if these should be 2 files or 1, and when I fixed one I broke the other. <strong>This was the most frustrating part of my experience.</strong> I only figured it out by looking at [this comment in the stripe-samples repo](https://github.com/stripe-samples/accept-a-card-payment/blob/ced1374a33c963d482ea88f29a1ff89a390831f7/using-webhooks/server/node/server.js#L11). I count this as a bug in the docs.

14. 🐛 When looking at https://stripe.com/docs/payments/handling-payment-events#create-webhook copying the text always copies the ruby version of the code rather than the current code we are on.

15. ✅ The Stripe CLI was super easy to setup, authenticate, and use to test webhooks. It's a great tool and I'm sure I just scratched the surface of what it's capable of.


## Preliminary Plan of Attack
1. The `webhooks` clash with `create-payment-intents` is the biggest issue from a straight developer docs perspective and caused me the most pain. That said, it's lower down the funnel and optional for some users.
2. Having a dev "choose their own adventure" with all the great resources we have in a structured way would've saved me tons of time and frustration. Reworking the flow of the docs to be clear about learning options and follow the easiest to hardest ordering will probably increase conversion.
3. Some small bugs can be fixed right off the bat - copying the right code based on language and no longer asking a user who is signed in to sign in.

I only touched a small portion of all the development types out there, so my bias is probably clear. I'd love to know where users drop off, what language/platform they use most, which tools they find most valuable, etc. That data would inform which of my issues are high priority for a majority of our users.
