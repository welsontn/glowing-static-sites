window.addEventListener('load', function() {
  window.history.pushState({ noBackExitsApp: true }, '')
})

window.addEventListener('popstate', function(event) {
  if (event.state && event.state.noBackExitsApp) {
    window.history.pushState({ noBackExitsApp: true }, '')
  }
})


// Orientation Test
screen.orientation.lock("landscape-primary")
screen.orientation.addEventListener("change", (event) => {
  const type = event.target.type;
  const angle = event.target.angle;
  console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
});
