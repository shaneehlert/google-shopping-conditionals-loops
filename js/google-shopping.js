var data = require("../products.json")
 var currentItem; 
 var item = 0;
 var backorders = []
 var multi_images = []
 var canons = []
 var ebay_canons = []
 for (var i = 0; i < data['items'].length; i++) {
     currentItem = data['items'][i];
     if (data['items'][i].kind === "shopping#product") {
         item++;
     }
     if (currentItem.product.inventories[0].availability === "backorder") {
        backorders.push(currentItem.product.title);
    }
    if (currentItem.product.images.length > 1) {
         multi_images.push(currentItem.product.title);
     }
     if (currentItem.product.brand === "Canon") {
         canons.push(currentItem.product.title);
     }
   if (currentItem.product.author.name.match(/ebay/gi)) {
        ebay_canons.push(currentItem.product.title)
         }
 }
 console.log('first answer 1');
 console.log(item); 
console.log('second answer 2');
 for (var i = 0; i < backorders.length; i++) {
     console.log(backorders[i]);
 }

console.log('third answer 3');
 for (var i = 0; i < multi_images.length; i++) {
     console.log(multi_images[i]);
 }

console.log('fourth answer 4');
 for (var i = 0; i < canons.length; i++) {
     console.log(canons[i]);
 }
console.log('fifth answer 5');
 for (var i = 0; i < ebay_canons.length; i++) {
     console.log(ebay_canons[i]);
 }

 console.log('sixth answer 6');
 for (var i = 0; i < data['items'].length; i++) {
     currentItem = data['items'][i];
     console.log("\n" + currentItem.product.brand);
     console.log(currentItem.product.images);
     console.log(currentItem.product.inventories[0].price)
 
 }


