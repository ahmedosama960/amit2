$.ajax({
	type:"GET",
	url:"https://jsonplaceholder.typicode.com/posts",
	data:{
		format : "json",
	},
	error:function(err){
        console.log(err)
		//some logic here
	},
	success: function(data){
        console.log(data)
		// do some logic with data
	}

})
