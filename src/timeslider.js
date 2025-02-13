// Get all DOM elements that have a timestamp

function getTimestampedHtmlElements() {
  return Array.from(document.getElementsByClassName("timed")).map((elem) => {
    elem.ioop = {
      startTime: parseInt(elem.dataset.startTime) || undefined,
      endTime: parseInt(elem.dataset.endTime) || undefined,
    };
    return elem;
  });
}

function updateTimestampedHtmlElements(time, timedElements) {
  const isWithinTime = (elem) => {
    const afterStart = !elem.ioop.startTime || time >= elem.ioop.startTime,
      beforeEnd = !elem.ioop.endTime || time <= elem.ioop.endTime;

    return afterStart && beforeEnd;
  };

  timedElements.forEach((elem) => {
    elem.hidden = !isWithinTime(elem);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var sheet = document.createElement("style");
  document.body.appendChild(sheet);

  var $rangeInput = document.querySelector(".range input");
  var rangeLabels = document.querySelectorAll(".range-labels li");
  var prefs = ["webkit-slider-runnable-track", "moz-range-track", "ms-track"];

  // Store the initial value of the range input when the page loads
  const initialTime = $rangeInput.value;

  var getTrackStyle = function (el) {
    var curVal = el.value;
    var val = (curVal - 0) * 16.666666667; // Updated to match the range of values (0-6)
    var style = "";

    // Set active label
    rangeLabels.forEach(function (label) {
      label.classList.remove("active", "selected");
    });

    var curLabel = rangeLabels[curVal];
    if (curLabel) {
      curLabel.classList.add("active", "selected");
      for (var i = 0; i < curVal; i++) {
        rangeLabels[i].classList.add("selected");
      }
    }

    // Change background gradient
    for (var i = 0; i < prefs.length; i++) {
      style +=
        ".range {background: linear-gradient(to right, #37adbf 0%, #37adbf " +
        val +
        "%, #fff " +
        val +
        "%, #fff 100%)}";
      style +=
        ".range input::-" +
        prefs[i] +
        "{background: linear-gradient(to right, #37adbf 0%, #37adbf " +
        val +
        "%, #636262 " +
        val +
        "%, #636262 100%)}";
    }

    return style;
  };

  $rangeInput.addEventListener("input", function () {
    sheet.textContent = getTrackStyle(this);
  });

  // Change input value on label click
  rangeLabels.forEach(function (label, index) {
    label.addEventListener("click", function () {
      $rangeInput.value = index;
      $rangeInput.dispatchEvent(new Event("input"));
    });
  });

  // Initialize the style
  sheet.textContent = getTrackStyle($rangeInput);

  // Reset timeline to initial settings when page is refreshed
  $rangeInput.value = initialTime;
  $rangeInput.dispatchEvent(new Event("input"));
});

document.addEventListener("DOMContentLoaded", function () {
  const timeSlider = document.querySelector(".range input");
  const timedElements = getTimestampedHtmlElements();
  console.log("TE", timedElements);

  function resetTimeline() {
    // Reset slider to initial value
    timeSlider.value = timeSlider.defaultValue; // Ensures it goes to the first loaded state
    timeSlider.dispatchEvent(new Event("input"));
  }

  // Reset timeline on page refresh
  resetTimeline();

  timeSlider.addEventListener("input", function () {
    const selectedTime = parseInt(this.value, 10);
    console.log("Selected time:", selectedTime);
    updateTimestampedHtmlElements(selectedTime, timedElements);
    filterDataPoints(selectedTime);
  });
});

// Function for checking window size and update to vertical layout
function adjustSliderLayout() {
    const range = document.querySelector(".range input");

    if (window.innerWidth < 750) {
        range.style.writingMode = "vertical-lr"; 
        range.style.transform = "rotate(180deg)";
        range.style.background = "linear-gradient(to top, #636363, #37adbf)";
    } else {
        range.style.writingMode = "horizontal-tb";
        range.style.transform = "none";
    }
}

// Apply when resizing and on load
window.addEventListener("resize", adjustSliderLayout);
window.addEventListener("load", adjustSliderLayout);
