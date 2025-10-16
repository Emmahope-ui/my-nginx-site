document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".hero .slider .slides");
    let currentIndex = 0;
    const totalSlides = slider.querySelectorAll(".slide").length;
    
    // Function to show the next slide
    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        slider.style.transform = `translateX(-${currentIndex * 49}%)`;
    };

    // Automatically slide every 3 seconds
    setInterval(showNextSlide, 3000);
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const sellerModal = document.getElementById("sellerModal");
    const sellerBtn = document.getElementById("sellerAccountBtn");
    const closeBtn = sellerModal.querySelector(".close");
  
    // Open the modal when the button is clicked
    sellerBtn.addEventListener("click", () => {
      sellerModal.style.display = "block";
    });
  
    // Close the modal when the close button is clicked
    closeBtn.addEventListener("click", () => {
      sellerModal.style.display = "none";
    });
  
    // Close the modal if user clicks outside of the modal content
    window.addEventListener("click", (event) => {
      if (event.target == sellerModal) {
        sellerModal.style.display = "none";
      }
    });
  });

  // Example countdown for the flash sale
document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    let timeLeft = 7200; // e.g., 1 hour in seconds
  
    const updateCountdown = () => {
      if (timeLeft <= 0) {
        countdownElement.textContent = "Expired";
        return;
      }
      timeLeft--;

      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      const hours = Math.floor(minutes / 60)
      countdownElement.textContent = `${hours}h : ${minutes}m : ${seconds}s`;
    };
  
    setInterval(updateCountdown, 1000);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".flash-item .flash-slider .flash-slides");
    let currentIndex = 0;
    const totalSlides = slider.querySelectorAll(".flash-slide").length;
    
    const showNextSlide = () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

    // Automatically slide every 3 seconds
    setInterval(showNextSlide, 3000);
});
  // Load or initialize cart
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const cartCountEl = document.getElementById('cart-count');
  const cartIcon = document.getElementById('cart-icon');
  const cartModal = document.getElementById('cart-modal');
  const closeCartBtn = document.getElementById('close-cart');
  const cartItemsContainer = document.getElementById('cart-items');
  const checkoutBtn = document.getElementById('checkout-btn');

  // Ensure data-name and data-price for all cards
  document.querySelectorAll('.product-card').forEach(card => {
    if (!card.dataset.name) card.dataset.name = card.querySelector('h3').innerText;
    if (!card.dataset.price) card.dataset.price = card.querySelector('.price').innerText.replace(/[^0-9\.]/g, '');
  });

  function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = total;
  }

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  function addToCart(id, name, price) {
    const existing = cart.find(i => i.id === id);
    if (existing) existing.quantity++;
    else cart.push({ id, name, price, quantity: 1 });
    saveCart();
    
  }

  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const { id, name, price } = card.dataset;
      addToCart(id, name, parseFloat(price));
    });
  });

  cartIcon.addEventListener('click', () => {
    renderCartItems();
    cartModal.style.display = 'flex';
  });

  closeCartBtn.addEventListener('click', () => cartModal.style.display = 'none');

  function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `<span>${item.name} x ${item.quantity}</span><span>$${(item.price * item.quantity).toFixed(2)}</span>`;
      cartItemsContainer.appendChild(div);
    });
  }

  checkoutBtn.addEventListener('click', () => alert('Proceed to checkout'));

  updateCartCount();
  function addToCart(id, name, price) {
    const existing = cart.find(i => i.id === id);
    if (existing) existing.quantity++;
    else cart.push({ id, name, price, quantity: 1 });
    saveCart();
  }
  
  // Modify your button handler to include the alert
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const { id, name, price } = card.dataset;
      addToCart(id, name, parseFloat(price));
  
      // Confirmation popup
      alert(`✅ Added ${name} to cart!`);
    });
  });
