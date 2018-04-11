var vm = new Vue({
    el: '#main',
    data: {
      	compass: ["N", "E", "S", "W"],
        inputString: "",
        square: true,
        english: true,
        size: 10,
        compassIndex: 0,
        y: 1,
        x: 1,
        placeholder: "Please input commands"
    },
    methods: {
        toggleSquare: function(){
          this.square = !this.square;
          this.resetPos();
        },
        toggleEnglish: function(){
          this.english = !this.english;
          if(this.english) {
            this.placeholder = "Please input commands";
          }else {
            this.placeholder = "Skriv kommandon här"
          }
        },
        incrSize: function() {
          if(this.size < 100) {
            this.size++;
          	this.resetPos();
          }
        },
        decrSize: function() {
          if(this.size > 1) {
            this.size--;
          	this.resetPos();
          }
        },
        resetPos: function() {
          this.compassIndex = 0;
          if(this.square) {
            this.y = 1;
          	this.x = 1;
          }else{
          	this.y = 0;
          	this.x = 0;
          }
        },
        processInput: function(){
        	var obj = {x: this.x, y: this.y, compassIndex: this.compassIndex};

        	for(var index=0;index<this.inputString.length;index++) {
        		if(this.english && (this.inputString[index] === 'L' || this.inputString[index] === 'R') || !this.english && (this.inputString[index] === 'V' || this.inputString[index] === 'H')) {
					        obj = this.changeDirection(this.inputString[index], obj);
            }else if(this.english && this.inputString[index] === "F" || !this.english && this.inputString[index] === "G") {
                  obj = this.move(obj);
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
        move: function(obj){
          var minSize = (this.size - (this.size * 2));
      		switch(obj.compassIndex){
          		case 0:
          			(obj.y === this.size) ? 0 : obj.y++;
          			break;
          		case 1:
          			(obj.x === this.size) ? 0 : obj.x++;
          			break;
          		case 2:
                (this.square) ? (obj.y === 1) ? 0 : obj.y-- : (obj.y === minSize) ? 0 : obj.y--;
          			break;
          		case 3:
                (this.square) ? (obj.x === 1) ? 0 : obj.x-- : (obj.x === minSize) ? 0 : obj.x--;
          		 	break;
      		}
      		return obj;
        }
    }
});
