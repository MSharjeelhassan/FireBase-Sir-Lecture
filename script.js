
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { ref, set, getDatabase, push,onValue} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";   // yahan maon na database ka link khud dala hy 
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA0VurUFNtedYP9upnjTB5704tJcOYsnX8",
    authDomain: "quizapp-392da.firebaseapp.com",
    databaseURL: "https://quizapp-392da-default-rtdb.firebaseio.com",
    projectId: "quizapp-392da",
    storageBucket: "quizapp-392da.appspot.com",
    messagingSenderId: "505089682800",
    appId: "1:505089682800:web:2c3f47e086db2f44f073b5",
    measurementId: "G-1RKKVY2D8C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

//   NOw we will create the initilization of our database by writng a function

const database = getDatabase()


var inp = document.getElementById('inp');

window.abc = function(){
    var obj = {
        text:inp.value,
    };
    obj.id = push(ref(database,"Task/")).key; // push-databse 
    var reference = ref(database, `Task/${obj.id}`);
    
    set(reference,obj)
};
// upar waley main hn na data enter kiya hy database main


// NOw nechay hm data get karenge

// function getData(){
//     var reference = ref(database, "Task/");

//     onValue(reference, function(data){
//         console.log(data.val())
//     })
// }

// getData();


function getData() {
    var reference = ref(database, "Task/");
    onValue(reference, function (data) {
      console.log(data.val());
    });
  }
  getData();