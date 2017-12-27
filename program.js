process.stdin.setEncoding('utf-8');
process.stdout.write('version - podaje wersję node.js\nlang - podaje język systemowy\n/exit - wyjście\n');
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    
    if(input !== null) {
        // teraz jest sens cokolwiek wyświetlać :)
        var instruction = input.toString().trim();
        switch (instruction) {
        	case '/exit':
	        	process.stdout.write('Quitting app!\n');
    	    	process.exit();
        	case 'version': 
            	console.log(process.version);
            	break;
        	case 'lang': 
            	console.log(process.env.lang);
            	break;
        	default:
            	process.stderr.write('Wrong instruction!\n');
        }
    }
});