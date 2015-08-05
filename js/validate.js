function validateForm() {
  var name = document.querySelector('.contact input[name="name"]');
  var span = document.querySelectorAll('.contact span');
  if (name.value === "" || name.value === null) {
    span[0].innerHTML = "Please enter your name";
  } else if (/([^a-zA-Z ]+|\s\s+)/gi.test(name.value)) {
    span[0].innerHTML = "Only letters and a space after each word are allowed!";
  } else if (name.value.length < 3) {
    span[0].innerHTML = "Name too short!";
  } else if (name.value.length > 20) {
    span[0].innerHTML = "Name too long!";
  } else {
    span[0].innerHTML = "<img src='images/check.png'>";
  }

  var subj = document.querySelector('.contact input[name="subject"]');
  if (subj.value === "" || subj.value === null) {
    span[1].innerHTML = "Please enter a subject";
  } else if (/([^a-zA-Z ]+|\s\s+)/gi.test(subj.value)) {
    span[1].innerHTML = "Only letters and a space after each word are allowed!";
  } else if (subj.value.length < 4) {
    span[1].innerHTML = "Subject too short!";
  } else if (subj.value.length > 30) {
    span[1].innerHTML = "Subject too long!";
  } else {
    span[1].innerHTML = "<img src='images/check.png'>";
  }

  var email = document.querySelector('.contact input[name="email"]');
  if (email.value === "" || email.value === null) {
    span[2].innerHTML = "Please enter an email";
  } else if (!(/\S+\@\S+\.\S+/gi.test(email.value)) || / +/gi.test(email.value)) {
    span[2].innerHTML = "Please enter a valid email!";
  } else {
    span[2].innerHTML = "<img src='images/check.png'>";
  }

  var wsite = document.querySelector('.contact input[name="website"]');
  if (wsite.value) {
    if (!(/\S+\.\S+\.\S+/gi.test(wsite.value))) {
      span[3].innerHTML = "Please enter a valid website url!";
      errWsite = true;
    } else {
      span[3].innerHTML = "<img src='images/check.png'>";
      errWsite = true;
    }
  } else {
    span[3].innerHTML = "";
    errWsite = false;
  }

  var ms = document.querySelector('.contact textarea');
  if (ms.value === "" || ms.value === null) {
    span[4].innerHTML = "Please enter your message";
  } else if (ms.value < 10) {
    span[4].innerHTML = "Message too short!";
  } else if (ms.value > 1000) {
    span[4].innerHTML = "Message too long!";
  } else {
    span[4].innerHTML = "<img src='images/check.png'>";
  }
}

function validateAgain() {
  validateForm();
  var check = '<img src="images/check.png">';
  var span = document.querySelectorAll('.contact span');
  if (span[0].innerHTML != check || span[1].innerHTML != check ||
    span[2].innerHTML != check || span[4].innerHTML != check ||
    errWsite) {
    span[5].style.color = "#f00";
    span[5].innerHTML = "Failed! Please correct the marked fields!";
    return false;
  } else {
    document.querySelector('.status').style.display = "block";
    return true;
  }
}

function change() {
  var span = document.querySelectorAll('.contact span')[5];
  span.style.color = "#0f3";
  span.innerHTML = "Message successfully sent!";
}

function addListeners() {
  var inputs = document.querySelectorAll('.contact input[type="text"]');
  for (var i = 0; i < 4; i++) {
    inputs[i].addEventListener('keyup', validateForm);
    inputs[i].addEventListener('click', validateForm);
  }
  var textarea = document.querySelector('.contact textarea');
  textarea.addEventListener('keyup', validateForm);
  textarea.addEventListener('click', validateForm);
}

var errWsite = false;
document.onload = addListeners();
