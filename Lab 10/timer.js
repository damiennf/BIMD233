      var counter = 0;

      function incrementCounter() {
        counter++;
        document.getElementById("counter").innerHTML = counter;
      }

      setInterval(incrementCounter, 3000);