// Famo.us State Modifier
// (C) 2014 splashinn

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var mainContext = Engine.createContext();

var stateModifier = new StateModifier({
  transform: Transform.translate(50, 140, 0)
});

var surface = new Surface({
  size: [200, 100],
  properties: {
    backgroundColor: '#FA5C4F'
  }
});

mainContext.add(stateModifier).add(surface);