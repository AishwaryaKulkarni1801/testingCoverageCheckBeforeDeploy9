// This file demonstrates ESLint violations - will be deleted after testing

import { Component } from '@angular/core';

console.log('This will trigger no-console error');
debugger; // This will trigger no-debugger error
alert('This will trigger no-alert error');

const unusedVariable = 'unused'; // This will trigger no-unused-vars error
var oldStyleVar = 'should use let/const'; // This will trigger no-var error

// This will trigger eqeqeq error
if (oldStyleVar == 'test') {
  // Missing braces will trigger curly error
  if (true) console.log('missing braces');
}

// This will trigger prefer-const error
let neverReassigned = 'should be const';

// This will trigger prefer-optional-chain
const obj: any = {};
if (obj && obj.property && obj.property.nested) {
  console.log(obj.property.nested);
}

export class TestComponent {
  // Empty lifecycle method will trigger Angular rule
  ngOnInit() {
    
  }
}