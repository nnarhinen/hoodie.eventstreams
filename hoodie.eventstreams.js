Hoodie.prototype.asEventStream = function(eventName, eventTransformer) {
  eventTransformer = eventTransformer || function(args) { return args; };
  var eventTarget = this;
  return new Bacon.EventStream(function(sink) {
    var unbind, handler = function(value) {
      var reply = sink(new Bacon.Next(eventTransformer(value)));
      if (reply === Bacon.noMore) {
        unbind();
      }
    };
    unbind = function() {
      eventTarget.off(eventName, handler);
    };
    eventTarget.on(eventName, handler);
    return unbind;
  });
};
Hoodie.LocalStore.prototype.asEventStream = function(event, eventTransformer) {
  event = event.replace(/(^| )([^ ]+)/g, "$1store:$2");
  return this.hoodie.asEventStream(event, eventTransformer);
};