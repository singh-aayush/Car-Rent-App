document.addEventListener("DOMContentLoaded", function () {
  // Side nav start

  const mobileBton = document.querySelector("#bton_icon");
  const sideNav = document.querySelector(".mobile_nav");
  const sideNavClose = document.querySelector(".close_nav");
  const modelClick = document.querySelector(".model_click");

  mobileBton.addEventListener("click", () => {
    sideNav.classList.add("open_nav");
  });
  sideNavClose.addEventListener("click", () => {
    sideNav.classList.remove("open_nav");
  });
  modelClick.addEventListener("click", () => {
    sideNav.classList.remove("open_nav");
    document.getElementById("models").scrollIntoView({ behavior: "smooth" });
  });

  // Side nav end...

  // Creating an Object with array and assign all the values of car detail into them.

  const carDetails = [
    {
      id: 1,
      perDayCharge: "9999",
      price: "29999",
      model: "Jaguar",
      activeYears: "5",
      transmission: "Automatic",
      fuel: "Petrol",
      ac: "YES",
      rating: "4.5/5",
      carImage: "jaguar.png",
    },
    {
      id: 2,
      perDayCharge: "9449",
      price: "27999",
      model: "BMW",
      activeYears: "7",
      transmission: "Automatic",
      fuel: "Diesel",
      ac: "YES",
      rating: "4.3/5",
      carImage: "bmw.png",
    },
    {
      id: 3,
      perDayCharge: "9499",
      price: "32999",
      model: "Audi",
      activeYears: "4",
      transmission: "Automatic",
      fuel: "Diesel",
      ac: "YES",
      rating: "4.6/5",
      carImage: "audi.png",
    },
    {
      id: 4,
      perDayCharge: "7999",
      price: "23999",
      model: "Range Rover",
      activeYears: "9",
      transmission: "Manual",
      fuel: "Petrol",
      ac: "YES",
      rating: "4.1/5",
      carImage: "range rover.png",
    },
    {
      id: 5,
      perDayCharge: "8999",
      price: "34999",
      model: "Mercedes",
      activeYears: "6",
      transmission: "Automatic",
      fuel: "Petrol",
      ac: "YES",
      rating: "4.8/5",
      carImage: "mercedes.png",
    },
    {
      id: 6,
      perDayCharge: "4999",
      price: "15999",
      model: "Tata EV",
      activeYears: "1.5",
      transmission: "Automatic",
      fuel: "Electric",
      ac: "YES",
      rating: "4.1/5",
      carImage: "tata nexon.png",
    },
    {
      id: 7,
      perDayCharge: "4449",
      price: "18599",
      model: "Fortuner",
      activeYears: "10",
      transmission: "Manual",
      fuel: "Diesel",
      ac: "YES",
      rating: "4.5/5",
      carImage: "toyota.png",
    },
    {
      id: 8,
      perDayCharge: "3449",
      price: "11999",
      model: "Manindra SUV",
      activeYears: "3.5",
      transmission: "Manual",
      fuel: "Petrol",
      ac: "YES",
      rating: "4.4/5",
      carImage: "mahindra suv.png",
    },
    {
      id: 9,
      perDayCharge: "2999",
      price: "7999",
      model: "Swift Dzire",
      activeYears: "10+",
      transmission: "Manual",
      fuel: "Petrol",
      ac: "YES",
      rating: "4.8/5",
      carImage: "swift .png",
    },
    {
      id: 10,
      perDayCharge: "1999",
      price: "4999",
      model: "Alto",
      activeYears: "10+",
      transmission: "Manual",
      fuel: "Petrol",
      ac: "NO",
      rating: "3.5/5",
      carImage: "alto.png",
    },
  ];

  // End of assign.

  // Access car buttons.

  const buttons = document.querySelectorAll(".car_model_bton");
  const images = document.querySelectorAll(".carimage");
  const displayImage = document.querySelector(".model_image");

  buttons.forEach((e) => {
    e.addEventListener("click", () => {
      const buttonValue = parseInt(e.value);
      let compare = carDetails.find(
        (itemValue) => itemValue.id === buttonValue
      );
      if (compare) {
        displayImage.src = compare.carImage;
        rent_price.textContent = `${compare.perDayCharge}₹` + " ";
        model_name.innerHTML = compare.model;
        year.innerHTML = compare.activeYears;
        transmission_name.textContent = compare.transmission;
        fule_name.innerHTML = compare.fuel;
        accessories_name.textContent = compare.ac;
        ratings_name.textContent = compare.rating;
      }
    });
  });

  const rent_price = document.querySelector(".rent_price");
  const model_name = document.querySelector(".model_name");
  const year = document.querySelector(".year");
  const transmission_name = document.querySelector(".transmission_name");
  const fule_name = document.querySelector(".fule_name");
  const accessories_name = document.querySelector(".accessories_name");
  const ratings_name = document.querySelector(".ratings_name");

  // Access car button end.

  // Question query seciton.

  const questionDetails = document.querySelectorAll(".question_details");
  const solutions = {
    1: document.querySelector(".one_solution"),
    2: document.querySelector(".two_solution"),
    3: document.querySelector(".three_solution"),
  };

  let openSolution = null;

  questionDetails.forEach((question) => {
    question.addEventListener("click", () => {
      const value = question.getAttribute("data-target");
      const currentSolution = solutions[value];
      if (currentSolution === openSolution) {
        // If the current solution is already open, close it
        currentSolution.style.display = "none";
        openSolution = null;
      } else {
        // If a different solution is clicked, close the previously open one (if any)
        if (openSolution) {
          openSolution.style.display = "none";
        }
        // Open the clicked solution
        currentSolution.style.display = "block";
        openSolution = currentSolution;
      }
    });
  });

  // Question query section end.

  // Page scroll start.

  const scroll = document.querySelector(".scroll_top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      scroll.style.display = "flex";
    } else {
      scroll.style.display = "none";
    }
  });
  scroll.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Page scroll end.

  // Section scroll behaviour.

  document.getElementById("car_book").addEventListener("click", () => {
    scrollSmoothly("booking");
  });
  document.getElementById("model-link").addEventListener("click", () => {
    scrollSmoothly("models");
  });
  function scrollSmoothly(scroll) {
    const containerName = document.getElementById(scroll);
    if (containerName) {
      containerName.scrollIntoView({ behavior: "smooth" });
    }
  }

  document.getElementById("question_one").addEventListener("click", () => {
    scrollSmoothly("solution_one");
  });
});
