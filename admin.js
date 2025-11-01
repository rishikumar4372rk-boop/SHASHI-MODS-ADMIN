import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPWXKHHVfevnhu3vX354XXE8dDv-30SQY",
  authDomain: "injector-admin-cec7d.firebaseapp.com",
  databaseURL: "https://injector-admin-cec7d-default-rtdb.firebaseio.com",
  projectId: "injector-admin-cec7d",
  storageBucket: "injector-admin-cec7d.appspot.com",
  messagingSenderId: "588477478003",
  appId: "1:588477478003:web:44ac4d206f4bc32af06606",
  measurementId: "G-X9H0L872LW"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.addUser = function () {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const validity = document.getElementById("validity").value;
  const isActive = document.getElementById("statusCheckbox").checked;
  const access = document.querySelector('input[name="access"]:checked').value;
  const status = isActive ? "active" : "inactive";
  const resultEl = document.getElementById("result");

  if (!username || !password || !validity) {
    resultEl.innerText = "Please fill all fields.";
    return;
  }

  const date = new Date(validity);
  const pad = n => n.toString().padStart(2, '0');
  const formattedDate = `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  
  // Get current time for registration time
  const now = new Date();
  const rgtime = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;

  const userRef = ref(db, `userdata/${username}`);
  set(userRef, {
    username: username,
    password: password,
    status: status,
    validity: formattedDate,
    access: access,
    device: "null",
    rgtime: rgtime  // Add registration time
  }).then(() => {
    resultEl.innerText = "User added successfully!";
  }).catch((error) => {
    resultEl.innerText = "Error: " + error.message;
  });
};