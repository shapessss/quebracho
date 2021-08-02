barba.init({
	transitions: [{
		name: 'fades',
		leave: function(data){
			var done = this.async();
			document.body.classList.add('loading');
			setTimeout(function(){
				done();
			}, 600);
		},
		enter: function(data){
			var done = this.async();
			done();
			setTimeout(function(){
				document.body.classList.remove('loading');
			}, 600);
            window.scrollTo(0, 0);
		}
	}]
});