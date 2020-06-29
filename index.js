var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    name: "Dani"
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa....";
    }
  }
});

