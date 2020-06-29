var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    name: "Dani",
    showExtraInformation: true
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa....";
    }
  }
});

