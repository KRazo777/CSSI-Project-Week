
let pictures = document.querySelectorAll(".card-image");
// Fill in the object
let quizValues = {
  pore: ["oily", "normal", "dry", "combo"],
  shine: ["combo", "oily", "normal", "dry"],
  feel: ["dry", "combo", "oily", "normal"],
  sun: ["combo", "normal", "dry", "oily"],
  conditions: ["normal", "oily", "dry", "combo"],
};

// 'quizTaker' object here
let quizTaker = {
  normal: 0,
  dry: 0,
  oily: 0,
  combo: 0,
};



// Make every image clickable!
pictures.forEach((picture) => {
  picture.addEventListener("click", (e) => {
    // Save the user's choice in a variable.
    let choice = picture.id.split("-");
    if (picture.classList.contains("has-background-danger-light")) {
      picture.classList.remove("has-background-danger-light")
      let ans = quizValues[choice[0]][choice[1]];
      quizTaker[ans]--;
      console.log("Removed: " + ans)
    }
    else {

      pictures.forEach((pic) => {
        let currPic = pic.id.split("-")
        if (currPic[0] === choice[0] && currPic[1] != choice[1] && pic.classList.contains("has-background-danger-light")) {
          pic.classList.remove("has-background-danger-light");
          let ans = quizValues[currPic[0]][currPic[1]];
          quizTaker[ans]--;
          console.log("Removed: " + ans)
        }

      });
      picture.classList.toggle("has-background-light");
      picture.classList.toggle("has-background-danger-light");
      let answer = quizValues[choice[0]][choice[1]];
      quizTaker[answer]++;
      console.log("Added:" + answer);

      if (choice[0] == "pore") {
        document.getElementById("shineQuestion").style.display = "block";
      } else if (choice[0] == "shine") {
        document.getElementById("feelQuestion").style.display = "block";
      } else if (choice[0] == "feel") {
        document.getElementById("sunQuestion").style.display = "block";
      } else if (choice[0] == "sun") {
        document.getElementById("conditionsQuestion").style.display = "block";
      } else if (choice[0] == "conditions") {
        document.getElementById("poreQuestion").style.display = "none";
        document.getElementById("shineQuestion").style.display = "none";
        document.getElementById("feelQuestion").style.display = "none";
        document.getElementById("sunQuestion").style.display = "none";
        document.getElementById("conditionsQuestion").style.display = "none";
      }


      // If its the last question, unhide the result.
      if (choice[0] == "conditions") {
        let max = -1;
        let finalAnswer = "";
        for (let skinType in quizTaker) {
          console.log(quizTaker[skinType]);
          if (quizTaker[skinType] > max) {
            max = quizTaker[skinType];
            finalAnswer = skinType;
            console.log(finalAnswer)
            console.log(quizTaker)
          }
        }
        document.getElementById(finalAnswer).style.display = "block";
      }

    }
  });
})