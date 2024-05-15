
  const nav1=document.querySelector('.nav');
 window.addEventListener('scroll', ()=>{
    if(window.scrollY>=56){
      nav1.classList.add("navscrolled");
    } else if(window.scrollY < 56){
      nav1.classList.remove("navscrolled");
    }
  });

  const loginText = document.querySelector(".title-text .login");
  const loginForm = document.querySelector("form.login");
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const signupLink = document.querySelector("form .signup-link a");
  const signupForm = document.querySelector("form.signup");
  signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  });
  loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  });
  signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
  });
  
          // Add event listener for form submission
          loginForm.addEventListener("submit", (event) => {
              event.preventDefault(); // Prevent default form submission
  
              // Validate email and password
              const email = loginForm.querySelector('input[type="text"]').value;
              const password = loginForm.querySelector('input[type="password"]').value;
  
              if (!validateEmail(email)) {
                  alert("Invalid email address. Please enter a valid email.");
                  return;
              }
  
              if (password.length < 6) {
                  alert("Password must be at least 6 characters long.");
                  return;
              }
  
              // Process login data (e.g., send to server)
              console.log("Login form submitted:", email, password);
          });
  
          
  // Get references to form elements
  const passwordInput = document.getElementById("new_password");
  const confirmPasswordInput = document.getElementById("verifyPassword");
  
  // Add event listener for form submission
  signupForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Validate email, username, password, and password confirmation
      const email = signupForm.querySelector('input[type="email"]').value;
      const username = signupForm.querySelector('input[type="text"]').value;
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
  
      if (!validateEmail(email)) {
          alert("Invalid email address. Please enter a valid email.");
          return;
      }
  
      if (username.trim() === "") {
          alert("Username cannot be empty.");
          return;
      }
  
      if (password.length < 6) {
          alert("Password must be at least 6 characters long.");
          return;
      }
  
      if (password !== confirmPassword) {
          alert("Passwords do not match. Please confirm your password correctly.");
          return;
      }
  
      // Process signup data (e.g., send to server)
      console.log("Signup form submitted:", email, username, password);
  });
  
  // Email validation function
  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
  


