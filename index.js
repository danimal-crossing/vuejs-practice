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
    },
    deleteFruit: function (fruit) {
      // find index of the string 'apple'
      var index = this.fruits.indexOf(fruit)
      // splice out that index
      this.fruits.splice(index, 1);
    }
  }
});

