This is my e-commerce library platform, developed using JavaScript, React, and CSS.

One of the primary technical challenges I encountered during development involved dynamically toggling the "Add to Cart" button to display "Checkout" once items had been successfully added to the shopping basket. I consistently encountered a runtime error:

Cannot read properties of undefined (reading 'find')

Upon thorough debugging, I traced the issue to a function responsible for managing button state. The error stemmed from the absence of a correctly passed prop, which prevented the component from accessing the cart object.

After further inspection, I identified that the cart prop was not being passed from the root component (App.js), causing the state dependency to fail. While seemingly minor, this issue highlighted several areas of improvement in my understanding of React's component lifecycle, prop drilling, and state reactivity.

To address these shortcomings, I undertook a series of self-directed projects focused on reinforcing my knowledge of React fundamentals—particularly the use of props, the re-rendering process, and JavaScript’s event loop. This hands-on experience significantly enhanced my proficiency in front-end architecture and strengthened my ability to diagnose and resolve real-world development issues effectively.
