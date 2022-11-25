import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto md:px-10 lg:px-20 py-20">
      <h1 className="text-3xl text-center pb-10 uppercase font-semibold">
        Read Our Blogs
      </h1>
      <div className="flex flex-col w-full flex-wrap min-h-screen">
        <div className="grid  card bg-base-100 rounded-box mb-10 place-items-center">
          <div className="question text-xl font-medium mb-8">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="answer text-black">
            We can manage React State with useContext and useReducer <br />{" "}
            useContext together with useReducer takes the component co-located
            state management on another level. Suddenly we can pass the state
            container created by useReducer and its dispatch function to any
            component from any top-level component. It can also be the most
            top-level component to make the state "global." It's also possible
            to pass things down only using React props, but React's Context API
            makes your state and dispatch function available anywhere without
            explicitly passing everything down the component tree.
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid  card bg-base-100 rounded-box mb-10 place-items-center">
          <div className="question text-xl font-medium mb-8">
            How does prototypical inheritance work?
          </div>
          <div className="answer text-black">
            When we read a property from object, and it’s missing, JavaScript
            automatically takes it from the prototype. In programming, this is
            called “prototypal inheritance”. <br />
            JavaScript looks for inherited properties in the prototype of the
            object, but also in the prototype of the prototype, and so on in the
            chain of prototypes.
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid  card bg-base-100 rounded-box mb-10 place-items-center">
          <div className="question text-xl font-medium mb-8">
            What is a unit test? Why should we write unit tests?
          </div>
          <div className="answer text-black">
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staff. The main objective of unit
            testing is to isolate written code to test and determine if it works
            as intended. Unit testing is an important step in the development
            process, because if done correctly, it can help detect early flaws
            in code which may be more difficult to find in later testing stages.
            Unit testing is a component of test-driven development (TDD), a
            pragmatic methodology that takes a meticulous approach to building a
            product by means of continual testing and revision. This testing
            method is also the first level of software testing, which is
            performed before other testing methods such as integration testing.
            Unit tests are typically isolated to ensure a unit does not rely on
            any external code or functions. Testing can be done manually but is
            often automated.
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid  card bg-base-100 rounded-box mb-10 place-items-center">
          <div className="question text-xl font-medium mb-8">
            React vs. Angular vs. Vue?
          </div>
          <div className="answer text-black">
            Angular.js offers a very clear structure and lots of features. It
            allows development teams to move quickly to implementation without
            the need to define structures or look for additional libraries.
            However, it is often too overloaded for small projects and brings
            unnecessary ballast. <br />
            React is recommended for projects with front-end-heavy results.
            Since there are no clear structures, close cooperation between the
            development team is vital. React has stronger server-side rendering
            support, making the library more SEO-friendly. <br />
            Vue may be used for a wide range of applications. It may give a
            great solution for virtually every project type due to its
            interoperability with other JavaScript frameworks and its ability to
            add more complicated logic to current programs.
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Blog;
