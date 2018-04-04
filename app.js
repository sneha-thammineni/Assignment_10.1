//Constructor function for Rectangle objects
function Rectangle(length,breadth){
    
    this.length = length;
    this.breadth = breadth;
    
    this.calculateArea = function(){ //Creating a method which returns the assigned value
        
        return this.length * this.breadth;
    }
      
}

//Objects of the same type are created by calling the constructor function with the new keyword

var x = new Rectangle(3,5); 


console.log(x.calculateArea());

