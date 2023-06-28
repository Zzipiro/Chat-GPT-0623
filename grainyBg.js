// const grainyBackground = document.getElementsByClassName('grainy-background');

// function generateGrainyTexture() {
//   const width = grainyBackground.offsetWidth;
//   const height = grainyBackground.offsetHeight;

//   const canvas = document.createElement('canvas');
//   canvas.width = width;
//   canvas.height = height;

//   const ctx = canvas.getContext('2d');

//   const primaryBackgroundColor = getComputedStyle(document.body).getPropertyValue('--primary-background-color');

//   ctx.fillStyle = primaryBackgroundColor;
//   ctx.fillRect(0, 0, width, height);

//   for (let x = 0; x < width; x += 2) {
//     for (let y = 0; y < height; y += 2) {
//       const grain = Math.random() * 20;
//       ctx.fillStyle = `rgba(0, 0, 0, ${grain})`;
//       ctx.fillRect(x, y, 2, 2);
//     }
//   }

//   grainyBackground.style.backgroundImage = `url(${canvas.toDataURL()})`;
// }

// generateGrainyTexture();
