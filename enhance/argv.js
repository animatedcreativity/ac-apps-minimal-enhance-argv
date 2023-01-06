exports = module.exports = function() {
  var mod = {
    start: function() {
      app.parseArgv = function(list) {
        var options = {};
        for (var i=2; i<=process.argv.length-1; i++) {
          var option = process.argv[i];
          var name = option.split("=").shift().trim();
          var cName = app.camelCase(name).split("-").join("");
          var value = option.split("=").pop().trim();
          if (list.indexOf(name) >= 0) {
            options[cName] = value;
          } else {
            console.log(app.consoleColors.bgRed, "Invalid option: " + name);
            return;
          }
        }
        app.cliOptions = options;
        return options;
      };
    }
  };
  mod.start();
  return mod;
}