if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function() {
    console.log("Service worker registered!");
  });
}

fetch("https://httpbin.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  // mode: "cors",
  body: JSON.stringify({ message: "Does this work?" })
})
  .then(resp => {
    // ReadableStream
    console.log("resp: ", resp);
    return resp.json();
  })
  .then(data => {
    console.log("data: ", data);
  })
  .catch(console.error);
