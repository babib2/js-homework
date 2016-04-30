windows.onload = function()
{
function Matrix(containerId,rows,cols){
	
	this.containerId = containerId;

	this.table = document.getElementById(containerId);

	this.rows = rows;

	this.cols = cols;

	this.create = function(){
		if( this.matrix = document.getElementById(this.containerId)) 
		{
			
			this.matrix.parentNode.removeChild(this.matrix);
			
		}
		
		this.matrix = document.createElement('div');
		this.matrix.id = this.containerId;
		this.matrix.tabIndex = 0;
		document.getElementsByTagName('body')[0].appendChild(this.matrix);

		var n = this.cols * this.rows;	//Размер поля n на m
		var divRed = this.getRandomInt(1,n); //Пункт назначения

		for (var i = 0; i < n; i++)
		{
			var div = document.createElement('div');
			div.className = 'cell matrix';
			div.innerText = i;
			if (divRed==i) {div.classList.add('finish')};
			this.matrix.appendChild(div);
		}
		
		console.log(this.table);
	}

	this.getRandomInt = function(min, max){
		  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	this.isBorder = function(_row,_col){
		var row = _row;
		var col = _col;
		if(row == this.rows) { row = 1;}
		if(row == 0) { row = this.rows;}
		if(col == this.cols) { col = 1;}
		if(col == 0) { col = this.cols;}
		
		return  {row:row,col:col};
	}

	this.isFinish = function(_row,_col){
		var row = _row;
		var col = _col;
		if(this.getDiv(row,col).classList.contains('finish')) this.newGame() ;
	}

	this.getDiv = function(_row,_col)
	{	
		//console.log('getDiv: [row] - '+row+' [col] - '+col)
		var divs = document.getElementById(this.containerId).getElementsByTagName('div');
		console.log(_row+''+_col);
		var cell = (_row-1) * this.rows + _col-1;
		console.log(cell +' cell');

		return divs[cell];

	}

	this.newGame = function(){
		alert("Новая игра");
		this.create();	
		this.row = this.getRandom (1,this.rows);
		this.col = this.getRandom (1,this.cols);
		active(this.row,this.col);
	}


	this.active = function(_row,_col){
		var row = _row;
		var col = _col;
		var div = this.getDiv(row,col);	
		console.log(div);		
		div.classList.add('active');

	}

	this.deactive = function(_row,_col){
		var row = _row;
		var col = _col;
		var div = this.getDiv(row,col);	
		
		div.classList.remove('active');
	}

	
	this.addListener = function(name,handler){
		this.table[name] = handler;
	}
	var that = this;
	this.onkeydown = function(event){
//console.log(event.keyCode);	
		if (event.keyCode>=37 && event.keyCode<=40){that.deactive(that.row,that.col);console.log('деактивация: '+'row - '+window.row+' col - '+window.col);}
		var divs = window.document.getElementsByClassName('cell');
		
		
		switch (event.keyCode) {

				    case 37:
				    	that.col = isBorder(that.row,--that.col).col;
				    	that.active(that.row,that.col);
				        that.isFinish(that.row,that.col);
				        //console.log('активация: '+'row - '+window.row+' col - '+window.col);
				        
				        console.log('активация: '+'row - '+that.row+' col - '+that.col);
				        break;

				    case 38:
				    	that.row = isBorder(--that.row,that.col).row;
				        that.active(that.row,that.col);
				    	that.isFinish(that.row,that.col);
				        //console.log('активация: '+'row - '+window.row+' col - '+window.col);
				        
				        console.log('активация: '+'row - '+that.row+' col - '+that.col);

			        
				        break;
				    case 39:
					    that.col = isBorder(that.row,++that.col).col;
				        that.active(that.row,that.col);
				        that.isFinish(that.row,that.col);
				        //console.log('активация: '+'row - '+window.row+' col - '+window.col);
				        
				        console.log('активация: '+'row - '+that.row+' col - '+that.col);
				        break;
				    case 40:
				    	that.row = isBorder(++that.row,that.col).row;
				        that.active(that.row,that.col);
				        that.isFinish(that.row,that.col);

				        //console.log('активация: '+'row - '+window.row+' col - '+window.col);
		
				        console.log('активация: '+'row - '+that.row+' col - '+that.col);
				        break;
	    		    }


	} 
	console.log(this);

	
	

}










//Возращает объект ячейки (div)



//
// Точка входа.
//


	var m1 = new Matrix('matrix',20,20); //newGame();
	m1.create();
	m1.active(5,5);
	m1.addListener('onkeydown', m1.onkeydown())


}		








/*function getChar (e)
{
            var keyCode = ('which' in event) ? event.which : event.keyCode;
            
             move(keyCode);
    
}*/