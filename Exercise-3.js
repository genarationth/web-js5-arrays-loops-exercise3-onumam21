// Outer loop for the number of rows
for (let i = 1; i <= 5; i++) {
    // Initialize an empty string for each row
    let row = '';
    
    // Inner loop for the number of asterisks in each row
    for (let j = 1; j <= i; j++) {
      row += '* ';
    }
    
    // Print the row
    console.log(row.trim());
  }  