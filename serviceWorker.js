self.addEventListener('install', (event) => {
  console.log(event, 'INSTALLED');
});

self.addEventListener('activated', (event) => {
  console.log(event, 'ACTIVATED');
});

console.log('worker');
