console.log("howdy")
setTimeout(() => {
  const iframe = document.getElementById('f');
  console.log("Got iframe", iframe)
  iframe.contentWindow.postMessage(`
    <img src="https://i.kym-cdn.com/photos/images/facebook/001/166/993/284.png" onload="alert(window.location.href)"/>
    <script>alert(window.location.href)</script>
  `, '*');
}, 1000)
