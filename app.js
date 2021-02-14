// // #2 | The Vue Instance
// new Vue({ // "()" << is an object / "{}" << is a parameter
//   el: '#vue-app---the-vue-instance', // this is an instance, where VueJS is going to control everything in the root property (i.e. "div" in html)
//   // (i.e. div) using TEMPLATE SYNTAX or STRING INTERPOLATION in the html file.
//   data: { // this is a data object where we put the data properties.
//     name: 'Kaji' // this is a data property which can be outputed on html inside double curly braces "{{ }}" aka TEMPLATE SYNTAX / STRING INTERPOLATION.
//
//   }
// });

// // #3 | Data & Methods
// new Vue ({
//   el: '#vue-app---data-and-methods',
//   data: {
//     name: 'Kaji',
//     job: 'Developer'
//   },
//   methods: {
//     greet: function(time){ // inside this function is where we set the name of the parameter we used in the html file.
//       this.name // "this" refers to the instance it is under, "." is used to refer the name of the data property within this instance.
//       return 'Good ' + time + ' ' + this.name; // where we callout the passed value to the function parameter using return keyword as the output on the html file. | "+" is used for concatenatation.
//     }
//   }
// });

// // #4 | Data Binding
// new Vue({
//   el: '#vue-app---data-binding',
//   data: {
//     name: 'Kaji',
//     job: 'Developer',
//     website: 'http://www.devscreed.com.ph',
//     websiteTag: '<a href="http://www/devscreed.com.ph">devsCreed Website</a>'
//   },
//   methods: {
//     greet: function(time){
//       return 'Good ' + time + ' ' + this.name;
//     }
//   }
// });

// // #5 | Events | listens to DOM Events (Document Object Model using directives/instructions)
// new Vue({
//   el: '#vue-app---events',
//   data: {
//     age1: 20,
//     age2: 30,
//     x: 0,
//     y: 0
//   },
//   methods: {
//     // add: function(){
//     //   this.age2++;
//     // },
//     // subtract: function(){
//     //   this.age2--;
//     // }, >> for single year only
//     add: function(inc){
//       this.age2 += inc;
//     },
//     subtract: function(dec){
//       this.age2 -= dec;
//     }, // combination of 1 year & 10 years
//     updateXY: function(event){
//       // console.log(event);
//       this.x = event.offsetX;
//       this.y = event.offsetY;
//     }
//   }
// });

// // #6 | Event Modifiers | i.e. "once", "prevent" | other modifiers: "stop", "capture", "self"
// new Vue({
//   el: '#vue-app---event-modifiers',
//   data: {
//     age1: 20,
//     age2: 30,
//     x: 0,
//     y: 0
//   },
//   methods: {
//     // add: function(){
//     //   this.age2++;
//     // },
//     // subtract: function(){
//     //   this.age2--;
//     // }, >> for single year only
//     add: function(inc){
//       console.log();
//       this.age2 += inc;
//     },
//     subtract: function(dec){
//       this.age2 -= dec;
//     }, // combination of 1 year & 10 years
//     updateXY: function(event){
//       // console.log(event);
//       this.x = event.offsetX;
//       this.y = event.offsetY;
//     },
//     click: function(){
//       alert('You clicked me!');
//     }
//   }
// });

// // #7 | Keyboard Events | modifiers: "onkeydown", "onkeypress", "onkeyup"
//     new Vue({
//       el: '#vue-app---keyboard-events',
//       data: {
//
//       },
//       methods: {
//         logName: function(){
//           console.log('You entered your name!');
//         },
//         logAge: function(){
//           console.log('You entered your age!');
//         }
//       }
//     });

// // #8 | Two-Way Data Binding | v-model directive
// new Vue({
//       el: '#vue-app---two-way-data-binding',
//       data: {
//         name: '',
//         age: ''
//       },
//       methods: {
//         logName: function(){
//           console.log('You entered your name!');
//         },
//         logAge: function(){
//           console.log('You entered your age!');
//         }
//       }
//     });

// // #9 | Computed Properties
// new Vue({
//   el: '#vue-app---computed-properties',
//   data: {
//     age: 20,
//     a: 0,
//     b: 0
//   },
//   methods: {
//     // addToA: function(){
//     //   console.log('addToA');
//     //   return this.a + this.age;
//     // },
//     // addToB: function(){
//     //   console.log('addToB');
//     //   return this.b + this.age;
//     // }
//   }, // Not recommended due multiple log execution
//   computed: {
//     addToA: function(){
//       console.log('addToA');
//       return this.a + this.age;
//     },
//     addToB: function(){
//       console.log('addToB');
//       return this.b + this.age;
//     }
//   } // recommended procedure
// });

// // #10 | Dynamic CSS
// new Vue({
//   el: '#vue-app---dynamic-css',
//   data: {
//     available: false,
//     nearby: false
//   },
//   methods: {
//
//   },
//   computed: {
//     compClasses: function(){
//       return {
//         available: this.available,
//         nearby: this.nearby
//       }
//     }
//   }
// });

// // #11 | Conditionals (v-if, v-else-if, v-show)
// new Vue({
//   el: '#vue-app---conditionals',
//   data: {
//     error: false,
//     success: false
//   },
//   methods: {
//
//   },
//   computed: {
//
//   }
// });

// // #12 | Looping with v-for
// new Vue({
//   el: '#vue-app---looping-with-v-for',
//   data: {
//     name: 'kaji',
//     characters: ['Alpha','Beta','Charlie','Delta'],
//     ghosts: [
//       { name: 'White', age: 25},
//       { name: 'Black', age: 30},
//       { name: 'Red', age: 35}
//     ]
//   },
//   methods: {
//
//   },
//   computed: {
//
//   }
// });

// // #13 | Simple Punchbag Game
// new Vue({
//   el: '#vue-app---simple-punchbag-game',
//   data: {
//     health: 100,
//     ended: false
//   },
//   methods: {
//     punch: function(){
//       this.health -= 10;
//       if (this.health <= 0){
//         this.ended = true;
//       }
//     },
//     restart: function(){
//       this.health = 100;
//       this.ended = false;
//     }
//   },
//   computed: {
//
//   }
// }); // END OF SIMPLE PUNCHBAG GAME

// // #14 | Multiple Vue Instances
// var one = new Vue({
//   el: '#vue-app-one---multiple-vue-instances',
//   data: {
//     title: 'Vue App One'
//   },
//   methods: {
//
//   },
//   computed: {
//     greet: function(){
//       return 'Hello from App One! ^_^';
//     }
//   }
// });
//
// var two = new Vue({
//   el: '#vue-app-two---multiple-vue-instances',
//   data: {
//     title: 'Vue App Two'
//   },
//   methods: {
//     changeTitle: function(){
//       one.title = "Title changed";
//     }
//   },
//   computed: {
//     greet: function(){
//       return 'Yoh dudes! This is App Two speaking to yah! XD'
//     }
//   }
// });
//
// two.title = "Changed from outside";
// //NOTE: this is just to show you the  capabilities of vuejs but the best practice is to have an organized structure for your data for your vue instances..

// // #15 | Intro to Components
// Vue.component('greeting',{
//   template: '<p>Hey there, I am {{ name }} . <button @click="changeName">Change name</button></p>',
//   data: function(){
//     return {
//       name: 'Kaji'
//     }
//   },
//   methods: {
//     changeName: function(){
//       this.name = 'Wolfram';
//     }
//   }
// });
//
// new Vue({
//   el: '#vue-app-one---intro-to-components'
// });
//
// new Vue({
//   el: '#vue-app-two---intro-to-components'
// });

// #16 | Referencing with $refs
new Vue({
  el: '#vue-app---referencing-with-refs',
  data: {
      output: 'Your fave food'
  },
  methods: {
    readRefs: function(){
      console.log(this.$refs.test.innerText); //.input.value
      this.output = this.$refs.input.value;
    }
  }
});
