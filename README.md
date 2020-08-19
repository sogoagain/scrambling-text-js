<div align="center">
<h1>Scrambling Text</h1>

<img
  alt="scrambling text sample"
  src="https://raw.githubusercontent.com/sogoagain/scrambling-text-js/master/sample.gif"
/>

<p>A very simple JavaScript library written in vanilla js for scrambling text.</p>
<a href="https://sogoagain.github.io/scrambling-text-js/index.html">Demo Page<a>

<br />
</div>

<hr />

<p>
  <a href="https://nodei.co/npm/scrambling-text/"><img src="https://nodei.co/npm/scrambling-text.png?downloads=true&downloadRank=true&stars=true"></a>
</p>
<p>
  <a href="https://github.com/sogoagain/scrambling-text-js/actions?query=workflow%3A%22main+CI%22"><img alt="main CI status" src="https://github.com/sogoagain/scrambling-text-js/workflows/main%20CI/badge.svg"></a>
  <a href="https://github.com/sogoagain/scrambling-text-js/actions?query=workflow%3A%22Node.js+Package%22"><img alt="Node.js Package status" src="https://github.com/sogoagain/scrambling-text-js/workflows/Node.js%20Package/badge.svg"></a>
</p>
[![HitCount](http://hits.dwyl.com/sogoagain/scrambling-text-js.svg)](http://hits.dwyl.com/sogoagain/scrambling-text-js)

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)
  - [Basic Example](#basic-example)
  - [React Example](#react-example)
  - [Demo Example](#demo-examples)
- [LICENSE](#license)

## Installation

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org)

```
npm i scrambling-text
```

## Examples

### Basic Example

```javascript
// load 'scrambling-text' module.
import Scrambler from 'scrambling-text';

// create an instance of Scrambler.
const scrambler = new Scrambler();

// define a handler that is called whenever text is scrambled.
const handleScramble = (text) => {
  console.log(text);
}

// call scramble function with the text to be scrambled and handler.
scrambler.scramble('- Friedrich Nietzsche -', handleScramble);
```

### React Example

```jsx
import React, { useRef, useState, useEffect } from 'react';

// load 'scrambling-text' module.
import Scrambler from 'scrambling-text';

export default function ScramblingText() {
  // define the text to be scrambled as state.
  const [text, setText] = useState('- Friedrich Nietzsche -');
  // create an instance of Scrambler using useRef.
  const scramblerRef = useRef(new Scrambler());

  useEffect(() => {
    // call scramble function with the text to be scrambled and handler.
    scramblerRef.current.scramble(text, setText);
  }, []);

  return (
    <h1>
      {text}
    </h1>
  );
}
```

### Demo Example

> [Sample code from demo site](https://github.com/sogoagain/scrambling-text-js/tree/master/examples)

## LICENSE

[MIT](https://github.com/sogoagain/scrambling-text-js/blob/master/LICENSE)
