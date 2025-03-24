if (typeof browser === 'undefined') {
  globalThis.browser = chrome;
}

console.log('running content script');

setTimeout(() => {
  console.log('registering listener');
  browser.storage.onChanged.addListener((changes, areaName) => console.log({ changes, areaName }));
}, 1000);

setTimeout(async () => {
  console.log('setting storage');
  browser.storage.local.set({ test: ['hello', 'world', Math.random()] });

  console.log('getting storage');
  console.log(await browser.storage.local.get('test'));
}, 2000);
