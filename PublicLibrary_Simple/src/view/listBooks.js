p1.view.listBooks = {
	setupUserInterface: function () {
		var tableBodyE1 = document.querySelector("table#books>tbody");
		var keys = [], key = "", row = {};
		Book.loadAll();
		keys = Object.keys(Book.instances);
		for (var i = 0; i < keys.length; i++) {
			key = keys[i];
			row = tableBodyE1.insertRow();
			//We use the -1 index to make sure that the cells are appended
			row.insertCell(-1).textContent = Book.instances[key].isbn;
			row.insertCell(-1).textContent = Book.instances[key].title;
			row.insertCell(-1).textContent = Book.instances[key].year; 
		}
	}
};