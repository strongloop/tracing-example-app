module.exports = function subroutine() {
  setTimeout(startLeaking, 10000);

  function startLeaking() {
    function LeakyClass() {}

    setInterval(function() {
      var leaks = [];
      for (var i = 0; i < 1000; i++)
        leaks.push(new LeakyClass());
      leaks = [];
      console.log(leaks.length);
      // spikeCpu();
    }, 1000);
  }
};

// function spikeCpu() {
//   for (var t = Date.now(); Date.now() - t < 1e3;) {}
// }
