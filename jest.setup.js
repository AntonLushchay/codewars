// jest.setup.js
const chai = require('chai');

// Make sure chai and Jest's ".not" play nice together
// This is a common workaround for potential conflicts with the 'not' property.
// Source: https://medium.com/@ruben.oostinga/combining-chai-and-jest-matchers-3f0604c77734
const originalNot = Object.getOwnPropertyDescriptor(chai.Assertion.prototype, 'not').get;
Object.defineProperty(chai.Assertion.prototype, 'not', {
  get() {
    Object.assign(this, this.assignedNot);
    return originalNot.apply(this);
  },
  set(newNot) {
    this.assignedNot = newNot;
    return newNot;
  },
});

// Combine both Jest and Chai matchers on the global 'expect' object.
// This allows you to use both Jest's and Chai's assertions interchangeably.
const originalExpect = global.expect;

global.expect = (actual) => {
  const originalMatchers = originalExpect(actual);
  const chaiMatchers = chai.expect(actual);
  const combinedMatchers = Object.assign(chaiMatchers, originalMatchers);
  return combinedMatchers;
};
