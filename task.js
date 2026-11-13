function manageWindowCallback(done) {
  let win = window.open("", "", "width=300,height=300");

  setTimeout(() => {
    win.resizeTo(500, 500);

    setTimeout(() => {
      win.moveTo(200, 200);

      setTimeout(() => {
        win.close();
        if (done) done();
      }, 2000);
    }, 2000);
  }, 2000);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function manageWindowPromise() {
  let win = window.open("", "", "width=300,height=300");

  return delay(2000)
    .then(() => {
      win.resizeTo(500, 500);
      return delay(2000);
    })
    .then(() => {
      win.moveTo(200, 200);
      return delay(2000);
    })
    .then(() => {
      win.close();
    });
}

async function manageWindowAsyncAwait() {
  let win = window.open("", "", "width=300,height=300");

  await delay(2000);
  win.resizeTo(500, 500);

  await delay(2000);
  win.moveTo(200, 200);

  await delay(2000);
  win.close();
}

manageWindowCallback(() => {
  setTimeout(() => {
    manageWindowPromise().then(() => {
      setTimeout(() => {
        manageWindowAsyncAwait();
      }, 2000);
    });
  }, 2000);
});
