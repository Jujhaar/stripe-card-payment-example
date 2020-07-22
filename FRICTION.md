## Friction Log
"A friction log is a document that details your experience using the product. It should cover what was good about the experience, while
focusing on all the places where the product experience could've been improved, both from a user and your perspective."

## General notes
These notes will be coalesced into more meaningful stories at the end of the process
1. <b>Summary</b>: The docs window cuts off much of the content if it is not most of the screen. 
<b>Impact</b>: This is an issue as developers want their code on one side and the docs on the other to go back and forth between them. This issue is even more important today - most of us don't have the luxury of mulitple screens at home during Covid. It's even worse in the mobile view, but my guess is most developers looking at the docs are going through this on their computers. On the mac, scrolling left and right when the page doesn't respond takes you "back" or "forward", adding to the frustration of the user when trying to navigate.
<b>Potential fixes</b>: Two immediate fixes come to mind - ability to scroll left to right on the docs pages and hiding the side bar at a certain screen size.

2. I love the diagram explaining the customer journey right up front. This sets the stage well - a picture is worth 1,000 words.

3. <b>Problem</b>: I need to set up a whole new account for Stripe.
<b>Impact</b>: This is friction - I need to create a new, strong password that is unique and store it. The requirements are different from most accounts (10 chars instead of numbers, letters, special characters) which means now I need a completely unique password.
<b>Potential fixes</b>: This might be unavoidable due to the secure nature of Stripe. But I'd love to know 1) why the requirements are the way they are, 2) why we can't use another authentification method (e.g. Sign in with Google, Facebook, etc.), and 3) if we can add a "keep me signed in" checkbox to make sure the lazier ones of us don't need to remember the password forever.

4. The Stripe dashboard somehow has values on the graph when I haven't set anything up. Why?

5. I love the ability to choose the language throughout the code and the animation that switches it. Unfortunately, this is not saved as part of my account, so it continually switches back to the first option (Ruby).

6. Prefilled test keys. I love that idea because it doesn't take me out of the context of my work. Unfortunately, the tooltip that was so useful before I signed in continues to say "Sign in to see examples pre-filled with your test keys." even after I've signed in.

7. Meta point - why not provide an example repo based on the language of choice? Put the code snippets together, make it even more copy-and-paste able. What this solves is the view of the full picture, the ability to see how structures mold together, and an overall directory file structure which makes it easier to follow than text. One "crazy idea": just have an example repo for every language. NOTE: I found this later - it wasn't obvious to me at first but is very useful.

8. Over the copy icon, would love a tooltip that says "Copy" since it's a bit different than what the normal copy icon looks like to me.

9. I did a search for `Stripe PaymentIntent tutorial` and the first hit was not Stripe, it was https://fireship.io/lessons/stripe-payment-intents-tutorial/. We can learn a lot from what cusomters are doing instead of using our docs. 

10. The code sandbox is _amazing_. Seeing the code and being able to play with it in this environment is so important for iterative development and those who learn by tinkering (most impatient devs). Let's put this resource front and center.

11. The way this is created is not iterative. For example, I put a "CheckoutForm" element in the `collect card details` step even though it's not defined until the next portion, `submit the payment to stripe`.

12. Bold this text:
```
The client secret should still be handled carefully because it can complete the charge. Do not log it, embed it in URLs, or expose it to anyone but the customer.
```

13. The client secret fetching example has no file name and therefore takes more effort to figure out where to put and when.

14. I feel like the "What you're building" component is new and wasn't there when I checked a few days ago. But it's a great addition.

15. The ability to clone and run this github repo (https://github.com/stripe-samples/accept-a-card-payment) is _huge_. I wish I had done that instead of follow the docs.

bug found: first load doesn't show the stripe payment piece.
-16. Bug found: in [Integration builder tutorial](https://stripe.com/docs/payments/integration-builder) the code downloaded has the homepage at `localhost/checkout` when that page is blank. The homepage should just be `localhost:3000`. This is also _the best_ setup you all have. This should be highlighted better, and the exmaples here should match what is in the docs.-

-17. Bug found: The default form is tiny. The width isn't set correctly and the form is unusable in the demo.-

18. bug found: https://stripe.com/docs/payments/handling-payment-events#create-webhook copying on the right always copies the ruby rather than the current code we are on.

19. webhooks were nasty to implement because they are treated differently