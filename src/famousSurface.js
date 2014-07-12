// Famo.us create a surface
// (C) 2014 splashinn

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var firstSurface = new Surface({
  size: [200, 200],
  content: 'splashinn',
  properties: {
    color: 'white',
    fontSize: '40px',
    borderRadius: '15px',
    textAlign: 'center',
    backgroundColor: '#FA5C4F'
  }
});

mainContext.add(firstSurface);