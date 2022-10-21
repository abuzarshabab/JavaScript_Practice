// What is callback function in JavaScript

// Javascript is asynchronous and single-threaded language

// Blocking main thread

// Deep about Event listeners

// Closures Demo with Event listeners

// Scope demo with event listeners

// Garbage collection & removeEventListeners

function attachEventListeners() {
  let count = 0
  document.getElementById('clickMe').addEventListener('click', () => {
    console.log('Button clicked ', ++count);
  })
}

attachEventListeners()