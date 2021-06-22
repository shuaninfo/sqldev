// eslint-disable-next-line no-undef
XTab = (function (window, localStorage) {
  var
    prefix = 'XTab.',
    handlers = {},
    XTab = {};

  XTab.on = function (eventName, handler) {
    // eslint-disable-next-line no-use-before-define
    createHandlers(eventName);
    handlers[eventName].push(handler);
  };

  XTab.once = function (eventName, handler) {
    XTab.on(eventName, handler);
    // eslint-disable-next-line no-use-before-define
    XTab.on(eventName, remover);

    function remover () {
      XTab.off(eventName, handler);
      XTab.off(eventName, remover);
    }
  };

  XTab.off = function (eventName, handler) {
    if(arguments.length) {
      if(arguments.length > 1) {
        // eslint-disable-next-line no-use-before-define
        createHandlers(eventName);
        let index = handlers[eventName].indexOf(handler);
        if(~index) {
          handlers[eventName].splice(index, 1);
        }
      } else {
        handlers[eventName] = [];
      }
    } else {
      handlers = {};
    }
  };

  function createHandlers (eventName) {
    // eslint-disable-next-line no-unused-expressions
    handlers[eventName] || (handlers[eventName] = []);
  }

  XTab.emit = function (eventName, value) {
    var data = {};
    if(arguments.length > 1) {
      data.value = value;
    }
    data.timemark = Date.now();

    localStorage.setItem(prefix + eventName, JSON.stringify(data));
  };

  window.addEventListener('storage', function (e) {
    if(e.key.substr(0, prefix.length) === prefix) {
      let eventName = e.key.substr(prefix.length);

      if(handlers[eventName] && handlers[eventName].length) {
        let data = JSON.parse(e.newValue);

        handlers[eventName].slice()
          .forEach(function (handler) {
            /* conform arity */
            if(data.value) {
              handler.call(XTab, data.value);
            } else {
              handler.call(XTab);
            }
          });
      }
    }
  });
  return XTab;
})(window, localStorage);