class Person {
  constructor(name, age, url) {
    this.name = name;
    this.age = age;
    this.url = url;
    this.sayHello();
    // this.fetchData();
  }
  sayHello() {
    const msg = `Hello, ${this.name}, you are ${this.age} old!`;
    if (this.age > 50) {
      return msg + " wow that's old!";
    }
    {
      return msg + " nah, still many years to go!";
    }
  }
  async fetchData() {
    const response = await fetch(this.url);
    const fetchData = response.json();
    return fetchData;
  }
}

const andre = new Person("Andre", 27, "https://api.myjson.com/bins/iiuqk");

andre
  .fetchData()
  .then(resp => displayData(resp))
  .catch(error => console.error(error));

function displayData(resp) {
  resp.forEach(person => {
    const people = document.querySelector(".people");
    const element = document.createElement("p");
    element.innerText = person.name;
    people.appendChild(element);
  });
}
