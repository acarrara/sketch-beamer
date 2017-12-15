# SketchBeamer

HTML editor with live preview. It features dynamic loading of angular components.

### What does it mean?

It means that you can create declare your Angular modules as inputs of SketchBeamer and build HTML pages with your Angular components inside, without the need to setup a development environment! 

### Why would I need it?

If you're building a library with Angular, with SketchBeamer you can deploy a web app to let people play with your library.
For example, if your library is a ui kit, it would let people without a technical background (as designers) to build quick prototypes with only a browser. 

### May I take a quick look?
There is a running demo [here](https://acarrara.github.io/sketch-beamer/). 
The demo web app depends on a `CardModule` containing a `sb-card` component that you can add to the HTML source.

## Installation

Run `npm run serve` for a development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Usage

In your angular app, add the `sb-sketch` component.

```html
...
<sb-sketch [modules]="myModules"></sb-sketch>
...
```
 Declare your modules as inputs:
 ```javascript
 ...
   modules = [
    CardModule
  ];
  ...
 ```
You can use the emmet notation when editing the HTML source.

## Credits

Inspired by [this article](https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e). Many thanks to the author for sharing his experience.

## Similar projects

- [ng-dynamic](https://www.npmjs.com/package/ng-dynamic) - Lets you inject html at runtime and mount known Angular components.

## License

**MIT License**

Copyright (c) [2017] [Alessandro Carrara]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
