function yourfunction(class1, data, index ,data1){
	var len = data.length
	
	data1 = data1 + data[index];
	$(class1).html(data1)
	if(index >= len-1){
		return;
	}
	setTimeout(function(){
		index++;
		yourfunction('.typed', data, index, data1)
	},40);
}

$(function(){
	var data = $('.typed').text()
	yourfunction('.typed',data, 0 , "");
});