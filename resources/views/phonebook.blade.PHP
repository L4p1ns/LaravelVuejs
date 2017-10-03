<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">     
        <title>Phonebook</title>
        
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
       
    </head>
    <body>
     <div id="app">
     	<Myheader></Myheader>
	     	<div class="container">
	     		<router-view></router-view>	                    
		    </div>
     	<Myfooter></Myfooter>
     	
     </div>
     <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
