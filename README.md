
# Styx Shopping Cart

This is done as an assignment submission for an internship Oppoutnity at Styx.
Thought of doing this assignment in Next.js, then Adhered to the Assignment Guidlines;


### Technology Used
- React, Typescript, React Router


### Design File
[Figma](https://www.figma.com/design/p5PLinvCe82ZudXuhYcp3u/styx-shopping-cart?node-id=0-1&t=qvl1bfBF4lwUXSfc-1)
### Deployment Link
[Vecel](https://styx-shopping-cart.vercel.app/)


## Feature Implemented
- [x]  Product Listing Page
- [x]  Each Product Page
- [ ]  Responsive (sort of)
- [x]  Separate Cart Page
**Filterisation** 
- [x] Ordering Based on Price 
- [x] Ordering Based on Rating  
- [x] Filtering Based on Rating
- [x] Filtering Based on Availability
  
**Sorting**
- [x]  Low to High
- [x]  High to Low
**Searching**
- [x]  Implemented Debouncing for enchance searching
**Fully Functional Cart**
- [x]  Add To Cart
- [x]  Remove Item
- [x]  Change Quantity
**Performance**
- [x]  Debouncing


## Performance

### Debouncing

By **implementing debouncing**, I was able to optimize the searching feature by reducing the number of unnecessary API calls and improving the responsiveness of the search functionality.
To implement debouncing on the searching feature, I utilized JavaScript and HTML in the ProductList component. Firstly, I attached an event listener to the search input field to detect any changes in its value. This listener triggers a function responsible for handling the debouncing logic.

Within the debouncing function, I employed a timer mechanism to delay the execution of the search functionality. Upon each function call, any existing timer is cleared. Subsequently, a new timer is set using the setTimeout() method, with a specified delay (e.g., 300 milliseconds).

If the user continues typing within the delay period, the timer is cleared and reset. **This ensures that the search functionality is only triggered once the user pauses typing for the specified delay**. **Consequently, unnecessary API calls are avoided, leading to improved performance of the searching feature**.

By implementing debouncing, I successfully optimized the searching feature by **minimizing the number of unnecessary API calls** and **enhancing the responsiveness of the search functionality**.


## Type Safety

To ensure type safety and enhance the development experience, I utilized **TypeScript** in my Styx Shopping Cart project. 

By using TypeScript, I was able to define explicit types for variables, function parameters, and return values. This helped me catch potential type errors during development, as TypeScript performs static type checking and provides compile-time feedback on type mismatches.

In addition, TypeScript's type system enabled me to leverage features such as union types, intersection types, and generics. These advanced type features allowed me to write more expressive and reusable code, leading to better maintainability and extensibility of the project.

Overall, by incorporating TypeScript into my Styx Shopping Cart project, I ensured type safety, caught potential errors early in the development process, and enjoyed a more robust and efficient development experience.
