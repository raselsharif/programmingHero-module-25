document.getElementById('item-2').addEventListener('click' ,function(event){
    console.log("item two clicked");
    // event.stopPropagation();
    event.stopImmediatePropagation();
})
document.getElementById('item-2').addEventListener('click' ,function(){
    console.log("item two clicked two");
})
document.getElementById('item-2').addEventListener('click' ,function(){
    console.log("item two clicked three");
})

document.getElementById('list').addEventListener('click' ,function(){
    console.log("list clicked");
})
document.getElementById('ul-container').addEventListener('click' ,function(){
    console.log("ul-container clicked");
})

document.getElementById('body').addEventListener('click' ,function(){
    console.log("body clicked");
})