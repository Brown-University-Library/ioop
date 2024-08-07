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
});

document.addEventListener("DOMContentLoaded", function () {
  var timeSlider = document.querySelector(".range input");
  const timedElements = getTimestampedHtmlElements();
  console.log("TE", timedElements);
  timeSlider.addEventListener("input", function () {
    var selectedTime = parseInt(this.value, 10);
    console.log("Selected time:", selectedTime);
    updateTimestampedHtmlElements(selectedTime, timedElements);
    filterDataPoints(selectedTime);
  });
});
