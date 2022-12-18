let productsInCart = [];

/**contains product in cart */
const parentElement = document.querySelector('#buyItems');
 
/**Addition of prices */
const cartSumPrice = document.querySelector('#sum-prices');
/**Loyal points */
const loyalpoints = document.querySelector('#loyal');
/**Selecting products under this class */
const products = document.querySelectorAll('.product-under');

/**showing sumprice in the right side of the shopping cart */
const countTheSumPrice = function () { 
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.price;
	});
	return sum;
}

/**showinf loyal points in the right side of the user icon */
const countTheLoyal = function(){
	let x = 0;
	if(productsInCart.length>3){
          productsInCart.forEach(product => {
			x += 20*product.count;
		  });
		  return x;
	}
}

const updateShoppingCartHTML = function () { 
	//*putting every product in shopping cart to an array/
	localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
	if (productsInCart.length > 0) {
		let result = productsInCart.map(product => {
			return `
				<li class="buyItem">
					<img src="${product.image}">
					<div>
						<h5>${product.name}</h5>
						<h6>$${product.price}</h6>
						<div>
							<button class="button-minus" data-id=${product.id}>-</button>
							<span class="countOfProduct">${product.count}</span>
							<button class="button-plus" data-id=${product.id}>+</button>
						</div>
					</div>
				</li>`
		});
		parentElement.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		cartSumPrice.innerHTML = '$' + countTheSumPrice();
		loyalpoints.innerHTML = countTheLoyal() + '  '+ 'loyal points';

	}
	else {
		document.querySelector('.checkout').classList.add('hidden');
		parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
		cartSumPrice.innerHTML = '';
		loyalpoints.innerHTML = ' ';
	}
}



function updateProductsInCart(product) {
	for (let i = 0; i < productsInCart.length; i++) {
		if (productsInCart[i].id == product.id) {
			productsInCart[i].count += 1;
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			return;
		}
	}
	productsInCart.push(product);
}




products.forEach(item => {  
	item.addEventListener('click', (e) => {
		localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
		if (e.target.classList.contains('addToCart')) {
			const productID = e.target.dataset.productId;
			const productName = item.querySelector('.productName').innerHTML;
			const productPrice = item.querySelector('.priceValue').innerHTML;
			const productImage = item.querySelector('img').src;
			let product = {
				name: productName,
				image: productImage,
				id: productID,
				count: 1,
				/**+ sign to convert this to an integer*/
				price: +productPrice,
				basePrice: +productPrice,
			}
			updateProductsInCart(product);
			updateShoppingCartHTML();
		}
	});
});

parentElement.addEventListener('click', (e) => { // Last
	const isPlusButton = e.target.classList.contains('button-plus');
	const isMinusButton = e.target.classList.contains('button-minus');
	if (isPlusButton || isMinusButton) {
		for (let i = 0; i < productsInCart.length; i++) {
			if (productsInCart[i].id == e.target.dataset.id) {
				if (isPlusButton) {
					productsInCart[i].count += 1
				}
				else if (isMinusButton) {
					productsInCart[i].count -= 1
				}
				productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

			}
			if (productsInCart[i].count <= 0) {
				productsInCart.splice(i, 1);
			}
		}
		updateShoppingCartHTML();
	}
});


/**transaction completed command */

const btnSubmit = document.getElementById("submit1");
btnSubmit.addEventListener("click",Subalert );

function Subalert(event) {
alert("Transaction completed.Thankyou for your  donation.......!");
}

 