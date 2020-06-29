var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    name: "Dani",
    showExtraInformation: true,
    fruits: ["apple", "banana", "cantaloupe"],
    newFruit: ""
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa....";
    },
    addNewFruit: function () {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
  }
});

