// Function for discount button
function FunctionNameMoPare () {
    // declare variables
    let FunctionNameMoPareParaForUserInput = document.getElementById("UserInput").value;
    let discountedPrice = Number(FunctionNameMoPareParaForUserInput* .2).toFixed(2);

    // display output using JS Method
    document.getElementById("Recommended Brands").innerHTML = '
       <div class="container text-center mt-5 bg-primary text-white p-5 rounded">
         <h5>Recommended Brands:</h5>
            <button type="button" class="btn btn-outline-primary">Acer</button>
            <button type="button" class="btn btn-outline-primary">Lenovo</button>
            <button type="button" class="btn btn-outline-primary">HP</button> 
            <h2>Eligable Discount <span class="badge bg-danger>15,000</span></h2>
       </div>
    '
}