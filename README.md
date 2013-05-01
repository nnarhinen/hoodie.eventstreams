hoodie.eventstreams
===================

[Bacon.js](https://github.com/raimohanska/bacon.js) wrapper for [hoodie](http://hood.ie) events.

Heavily influenced by [Backbone.EventStreams](https://github.com/pyykkis/Backbone.EventStreams), thanks!

Usage
-----

```javascript

hoodie.store.asEventStream('add').onValue(function(newObject) {
  // do something with newObject
});

```