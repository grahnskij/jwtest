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
        },
        toggleEnglish: function(){
            this.english = !this.english;
        },
        kuk: function() {
        	for(var x = 0;x<2;x++) {
        		this.compassIndex++;
        	}
        },
        processInput: function(){
        	var obj = {x: this.x, y: this.y, compassIndex: this.compassIndex};


        	for(var index=0;index<this.inputString.length;index++) {

        		var letter = this.inputString[index];

        		if(this.english && (this.inputString[index] === 'L' || this.inputString[index] === 'R') || !this.english && (this.inputString[index] === 'V' || this.inputString[index] === 'H')) {
        			
					obj.compassIndex = this.changeDirection(letter, obj.compassIndex);

        		}else if(this.english && this.inputString[index] === "G" || !this.english && this.inputString[index] === "F") {
        			
        			obj = this.move(obj);
     				console.log(obj);

        		}
        	}
        	this.x = obj.x;
        	this.y = obj.y;
        	this.compassIndex = obj.compassIndex;

        },
        changeDirection: function(direction, compassIndex){
    		switch(direction){
        		case "L":
        		case "V":
        			compassIndex = (compassIndex === 0) ? 3 : compassIndex--;
        			break;
        		case "R":
        		case "H":
        			compassIndex = (compassIndex === 3) ? 0 : compassIndex++;
        			break;	
    		}
    		return compassIndex;
        },
        move: function(obj){
    		switch(obj.compassIndex){
        		case 0:
        			(obj.x === this.size) ? obj.x : obj.x++;
        			break;
        		case 1:
        			(obj.y === this.size) ? obj.y : obj.y++;
        			break;
        		case 2: 
        			(obj.x === 0) ? 0 : obj.x--;
        			break;
        		case 3:
        		 	(obj.y === 0) ? 0 : obj.y--;
        		 	break;
    		}
    		return obj;
        }
        
    }
});