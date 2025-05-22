This is my 📚 e-commerce library platform, developed using JavaScript, React, and CSS.

One of the primary technical challenges I encountered during development involved dynamically toggling the "Add to Cart" button to display "Checkout" once items had been successfully added to the shopping basket 🛒. I consistently encountered a runtime error:

⚠️ Cannot read properties of undefined (reading 'find')

After thorough debugging 🧠, I traced the issue to a function responsible for managing button state. The error stemmed from the absence of a correctly passed prop, which prevented the component from accessing the cart object.

Eventually, I discovered that the cart prop was not being passed from the root component (App.js) 🔍, which was causing the state dependency to break. While this may appear to be a minor issue, it revealed deeper gaps in my understanding of React concepts such as props, component re-rendering, and the JavaScript event loop 🔄.

To address these, I embarked on a series of self-initiated projects 🛠️ to strengthen my command of React’s architecture. This journey has greatly enhanced both my technical confidence and my ability to troubleshoot real world problems efficiently 💡 to diagnose and resolve real-world development issues effectively.
