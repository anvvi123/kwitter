var firebaseConfig = {
    apiKey: "AIzaSyBgrdk2fFL97OeFFjDr8GhQXkQwVfQDWWc",
    authDomain: "app1-788b1.firebaseapp.com",
    databaseURL: "https://app1-788b1-default-rtdb.firebaseio.com",
    projectId: "app1-788b1",
    storageBucket: "app1-788b1.appspot.com",
    messagingSenderId: "358118376481",
    appId: "1:358118376481:web:794e1aafaba2811af18f60",
    measurementId: "G-PM6CL8K2D9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
message:msg,
like:0
    });
    document.getElementById("msg").value ="";
}