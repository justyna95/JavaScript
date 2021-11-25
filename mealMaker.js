//As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.
//In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizer) {
    this._courses.appetizers = appetizer;
  },
  set mains(main) {
    this._courses.mains = main;
  },
  set desserts(dessert) {
    this._courses.desserts = dessert;
  },
  get courses() {
    return {
      appetizers: this.appetizer,
      mains: this.main,
      desserts: this.dessert
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
        name: dishName,
        price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    //calculate total price
    const totalPrice = appetizer.price + main.price + dessert.price;
    //returns string
    return `Here is your order: ${appetizer.name} followed by ${main.name} and ${dessert.name}. The total price of the meal is ${totalPrice} dollars.`
  }
};
// appetizers
menu.addDishToCourse('appetizers', 'sandwitches', 3.50);
menu.addDishToCourse('appetizers', 'salad', 2.00);
menu.addDishToCourse('appetizers', 'chicken wings', 5.00);
menu.addDishToCourse('appetizers', 'omlet', 3.50);
// mains
menu.addDishToCourse('mains', 'french fries with cheese', 7.50);
menu.addDishToCourse('mains', 'salmon and peas', 8.20);
menu.addDishToCourse('mains', 'dumplings', 6.50);
menu.addDishToCourse('mains', 'chicken soup', 7.00);
// desserts
menu.addDishToCourse('desserts', 'ice cream', 2.50);
menu.addDishToCourse('desserts', 'brownie', 2.80);
menu.addDishToCourse('desserts', 'apple pie', 3.35);
menu.addDishToCourse('desserts', 'plate of fruits', 3.50);

const meal = menu.generateRandomMeal();
console.log(meal);

