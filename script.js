function insert_Row() {
	let table = document.querySelector("#sampleTable")
	let row = document.createElement("tr")
	row.innerHTML = `
		<td>New Cell1</td> 
		<td>New Cell2</td>`
	table.insertBefore(row, table.children[0])
  
  
}
