let favoriteColors = [];

for (let i = 0; i < 3; i++) {
  let color = prompt(`Enter color ${i + 1}:`); 
  
  favoriteColors.push(color); 
  console.log(`Updated color list: ${favoriteColors}`); 
}

let newColor = prompt("Enter a new color to add to your favorites:");
favoriteColors.push(newColor);
console.log(`Updated color list after adding a new color: ${favoriteColors}`);
