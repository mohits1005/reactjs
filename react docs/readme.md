React - Javascript library for building user interfaces
React elements are immutable. Once you create an element, you can’t change its children or attributes.
When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object.
We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.
We can declare special methods on the component class to run some code when a component mounts and unmounts
These methods are called “lifecycle methods”.
The componentDidMount() method runs after the component output has been rendered to the DOM. 
With JSX you pass a function as the event handler, rather than a string.
we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it