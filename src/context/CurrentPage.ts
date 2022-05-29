export function CurrentPage() {
 const currentScroll = scrollY
 const screenHeight = innerHeight 

 const halfScreenHeight = currentScroll / screenHeight
 console.log(halfScreenHeight);
 
}