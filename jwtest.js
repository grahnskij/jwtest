var demo = new Vue({
    el: '#main',
    data: {
    	compass: ["N", "E", "S", "W"],
        inputString: "GL",
        square: true,
        english: true,
        size: 10,
        compassIndex: 0,
        y: 0,
        x: 0
    },
    methods: {
        toggleSquare: function(){
            this.square = !this.square;
            this.resetPos();
        },
        toggleEnglish: function(){
            this.english = !this.english;
        },
        incrSize: function() {
        	this.size++;
        	this.resetPos();
        },
        decrSize: function() {
        	this.size--;
        	this.resetPos();
        },
        resetPos: function() {
        	this.y = 0;
        	this.x = 0;
        	this.compassIndex = 0;
        },
        processInput: function(){
        	var obj = {x: this.x, y: this.y, compassIndex: this.compassIndex};


        	for(var index=0;index<this.inputString.length;index++) {

        		if(this.english && (this.inputString[index] === 'L' || this.inputString[index] === 'R') || !this.english && (this.inputString[index] === 'V' || this.inputString[index] === 'H')) {
        			
					obj = this.changeDirection(this.inputString[index], obj);

        		}else if(this.english && this.inputString[index] === "G" && this.square || !this.english && this.inputString[index] === "F" && this.square) {
        			
        			obj = this.moveSquare(obj);


        		}else if(this.english && this.inputString[index] === "G" && !this.square || !this.english && this.inputString[index] === "F" && !this.square) {

        			obj = this.moveCircle(obj);
        		}
        	}


        	this.x = obj.x;
        	this.y = obj.y;
        	this.compassIndex = obj.compassIndex;
        },
        changeDirection: function(direction, obj){
    		switch(direction){
        		case "L":
        		case "V":
        			(obj.compassIndex === 0) ? obj.compassIndex = 3 : obj.compassIndex--;
        			break;
        		case "R":
        		case "H":
        			(obj.compassIndex === 3) ? obj.compassIndex = 0 : obj.compassIndex++;
        			break;	
    		}
    		return obj;
        },
        moveSquare: function(obj){
    		switch(obj.compassIndex){
        		case 0:
        			(obj.y === this.size) ? obj.y : obj.y++;
        			break;
        		case 1:
        			(obj.x === this.size) ? obj.x : obj.x++;
        			break;
        		case 2: 
        			(obj.y === 0) ? 0 : obj.y--;
        			break;
        		case 3:
        		 	(obj.x === 0) ? 0 : obj.x--;
        		 	break;
    		}
    		return obj;
        },
        moveCircle: function(obj){
        	var minSize = (this.size - (this.size * 2));

    		switch(obj.compassIndex){
        		case 0:
        			(obj.y === this.size) ? obj.y : obj.y++;
        			break;
        		case 1:
        			(obj.x === this.size) ? obj.x : obj.x++;
        			break;
        		case 2: 
        			(obj.y === minSize) ? obj.y : obj.y--;
        			break;
        		case 3:
        		 	(obj.x === minSize) ? obj.x : obj.x--;
        		 	break;
    		}
    		return obj;
        }
        
    }
});