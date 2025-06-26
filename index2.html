<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Premium Product Collection</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    :root {
      --primary-color: #2D3142;
      --secondary-color: #6e5ee6;
      --text-light: #7D8597;
      --text-dark: #121212;
      --bg-light: #f8f9fc;
      --bg-white: #ffffff;
      --border-radius-sm: 8px;
      --border-radius-md: 16px;
      --border-radius-lg: 24px;
      --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.04);
      --shadow-md: 0 10px 25px rgba(0, 0, 0, 0.05);
      --shadow-hover: 0 20px 35px rgba(0, 0, 0, 0.07);
      --transition-fast: all 0.3s ease;
      --spacing-xs: 4px;
      --spacing-sm: 8px;
      --spacing-md: 16px;
      --spacing-lg: 24px;
      --spacing-xl: 32px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    body {
      background-color: var(--bg-light);
      color: var(--text-dark);
      line-height: 1.6;
      padding: var(--spacing-lg);
    }

    .container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 var(--spacing-lg);
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-xl);
      padding-bottom: var(--spacing-lg);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .page-title {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-size: 32px;
      font-weight: 700;
      color: var(--primary-color);
      margin-bottom: 4px;
    }

    .subtitle {
      font-size: 16px;
      color: var(--text-light);
      font-weight: 400;
    }

    .controls-wrapper {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }

    .filter-dropdown {
      position: relative;
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      background-color: var(--bg-white);
      padding: 10px var(--spacing-md);
      border-radius: var(--border-radius-sm);
      border: 1px solid rgba(0, 0, 0, 0.08);
      color: var(--text-dark);
      font-weight: 500;
      cursor: pointer;
      box-shadow: var(--shadow-sm);
    }

    .filter-dropdown i {
      color: var(--text-light);
    }

    .view-controls {
      display: flex;
      gap: var(--spacing-xs);
      background-color: var(--bg-white);
      padding: 4px;
      border-radius: var(--border-radius-sm);
      box-shadow: var(--shadow-sm);
    }

    .view-btn {
      background: none;
      border: none;
      padding: 10px;
      cursor: pointer;
      border-radius: var(--border-radius-sm);
      color: var(--text-light);
      transition: var(--transition-fast);
    }

    .view-btn i {
      font-size: 16px;
    }

    .view-btn.active {
      background-color: var(--secondary-color);
      color: white;
    }

    .view-btn:not(.active):hover {
      background-color: rgba(0, 0, 0, 0.04);
      color: var(--text-dark);
    }

    /* Grid View */
    .grid-view {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--spacing-lg);
    }

    /* Flex View */
    .flex-view {
      display: none;
      flex-direction: column;
      gap: var(--spacing-lg);
    }

    .product-card {
      position: relative;
      background-color: var(--bg-white);
      border-radius: var(--border-radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      transition: var(--transition-fast);
    }

    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-hover);
    }

    .product-image-container {
      position: relative;
      width: 100%;
      overflow: hidden;
      padding-top: 100%;
      /* 1:1 Aspect Ratio */
    }

    .flex-view .product-image-container {
      padding-top: 70%;
      /* Different aspect ratio for flex view */
    }

    .product-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .product-card:hover .product-image {
      transform: scale(1.08);
    }

    .card-top-actions {
      position: absolute;
      top: var(--spacing-md);
      right: var(--spacing-md);
      display: flex;
      gap: var(--spacing-xs);
      z-index: 1;
    }

    .action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: var(--bg-white);
      border: none;
      cursor: pointer;
      opacity: 0;
      transform: translateY(10px);
      transition: var(--transition-fast);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      color: var(--text-dark);
    }

    .badge {
      position: absolute;
      top: var(--spacing-md);
      left: var(--spacing-md);
      background-color: var(--secondary-color);
      color: white;
      font-size: 12px;
      font-weight: 600;
      padding: 5px 12px;
      border-radius: 30px;
      z-index: 1;
    }

    .product-card:hover .action-btn {
      opacity: 1;
      transform: translateY(0);
    }

    .action-btn:hover {
      background-color: var(--primary-color);
      color: white;
    }

    .action-btn:nth-child(1) {
      transition-delay: 0ms;
    }

    .action-btn:nth-child(2) {
      transition-delay: 50ms;
    }

    .product-info {
      padding: var(--spacing-md);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs);
    }

    .category {
      font-size: 13px;
      color: var(--text-light);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .product-title {
      font-weight: 600;
      font-size: 18px;
      color: var(--text-dark);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-top: 2px;
    }

    .stars {
      color: #FFD700;
      font-size: 14px;
    }

    .review-count {
      font-size: 14px;
      color: var(--text-light);
    }

    .price-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: var(--spacing-xs);
    }

    .price-container {
      display: flex;
      align-items: baseline;
      gap: 6px;
    }

    .price {
      font-weight: 700;
      font-size: 20px;
      color: var(--primary-color);
    }

    .original-price {
      font-size: 15px;
      color: var(--text-light);
      text-decoration: line-through;
    }

    .cta-button {
      background-color: var(--secondary-color);
      color: white;
      border: none;
      border-radius: var(--border-radius-sm);
      padding: 10px 16px;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      transition: var(--transition-fast);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: var(--spacing-sm);
      gap: var(--spacing-xs);
    }

    .cta-button i {
      font-size: 14px;
    }

    .cta-button:hover {
      background-color: #5e4ed6;
    }

    /* Card styles specific to flex view */
    .flex-view .product-card {
      display: flex;
      flex-direction: row;
    }

    .flex-view .product-image-container {
      width: 45%;
      padding-top: 0;
      height: auto;
      min-height: 300px;
    }

    .flex-view .product-info {
      width: 55%;
      padding: var(--spacing-lg);
      justify-content: center;
    }

    .flex-view .product-title {
      font-size: 22px;
      white-space: normal;
      margin-bottom: var(--spacing-xs);
    }

    .flex-view .category {
      margin-bottom: var(--spacing-xs);
    }

    .flex-view .product-description {
      display: block;
      color: var(--text-light);
      margin: var(--spacing-md) 0;
    }

    .flex-view .price {
      font-size: 24px;
    }

    .flex-view .cta-button {
      max-width: 200px;
    }

    .product-description {
      display: none;
      /* Hidden in grid view */
    }

    /* Mobile Styles */
    @media (max-width: 1200px) {
      .grid-view {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 992px) {
      .grid-view {
        grid-template-columns: repeat(2, 1fr);
      }

      .flex-view .product-card {
        flex-direction: column;
      }

      .flex-view .product-image-container {
        width: 100%;
        min-height: 200px;
      }

      .flex-view .product-info {
        width: 100%;
      }
    }

    @media (max-width: 576px) {
      .grid-view {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
      }

      h1 {
        font-size: 24px;
      }

      .page-title {
        margin-bottom: var(--spacing-sm);
      }

      header {
        flex-direction: column;
        align-items: flex-start;
      }

      .controls-wrapper {
        width: 100%;
        margin-top: var(--spacing-md);
        justify-content: space-between;
      }

      .card-top-actions .action-btn {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* View visibility control */
    .grid-view,
    .flex-view {
      display: none;
    }

    /* Show the active view */
    .flex-view.active {
      display: flex;
    }

    .grid-view.active {
      display: grid;
    }
  </style>
</head>

<body>
  <div class="container">
    <header>
      <div class="page-title">
        <h1>New Arrivals</h1>
        <span class="subtitle">Discover our latest products</span>
      </div>

      <div class="controls-wrapper">
        <div class="filter-dropdown">
          <span>Filter</span>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="view-controls">
          <button class="view-btn grid-btn active" onclick="switchView('grid')" aria-label="Grid View">
            <i class="fas fa-th"></i>
          </button>
          <button class="view-btn flex-btn" onclick="switchView('flex')" aria-label="List View">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>

    <div class="grid-view active" id="grid-view">
      <!-- Product 1 -->
      <div class="product-card">
        <div class="product-image-container">
          <span class="badge">New</span>
          <img src="/assets/img/10.png" alt="Premium Wireless Headphones" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Audio</div>
          <div class="product-title">Premium Wireless Noise-Cancelling Headphones</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <span class="review-count">(124)</span>
          </div>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$299.99</span>
              <span class="original-price">$349.99</span>
            </div>
          </div>
          <p class="product-description">
            Experience premium sound quality with active noise cancellation and up to 30 hours of battery life.
          </p>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>

      <!-- Product 2 -->
      <div class="product-card">
        <div class="product-image-container">
          <img src="/assets/img/10.png" alt="Smart Fitness Tracker" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Wearables</div>
          <div class="product-title">Advanced Fitness Tracker Pro</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <span class="review-count">(89)</span>
          </div>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$149.99</span>
              <span class="original-price">$179.99</span>
            </div>
          </div>
          <p class="product-description">
            Track your fitness goals with heart rate monitoring, sleep tracking, and water resistance up to 50m.
          </p>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>

      <!-- Product 3 -->
      <div class="product-card">
        <div class="product-image-container">
          <span class="badge">Sale</span>
          <img src="/assets/img/10.png" alt="Portable Bluetooth Speaker" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Audio</div>
          <div class="product-title">Waterproof Bluetooth Speaker</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <span class="review-count">(215)</span>
          </div>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$79.99</span>
              <span class="original-price">$99.99</span>
            </div>
          </div>
          <p class="product-description">
            Enjoy 24 hours of playtime and amazing sound quality with this portable, waterproof Bluetooth speaker.
          </p>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>

      <!-- Product 4 -->
      <div class="product-card">
        <div class="product-image-container">
          <img src="/assets/img/10.png" alt="Ultra HD Smart TV" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Electronics</div>
          <div class="product-title">55" 4K QLED Smart TV</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <span class="review-count">(147)</span>
          </div>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$899.99</span>
              <span class="original-price">$1099.99</span>
            </div>
          </div>
          <p class="product-description">
            Experience stunning 4K resolution with Quantum Dot technology and smart features for all your entertainment
            needs.
          </p>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>

      <!-- Product 5 -->
      <div class="product-card">
        <div class="product-image-container">
          <img src="/assets/img/10.png" alt="Premium Coffee Maker" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Kitchen</div>
          <div class="product-title">Premium Coffee Maker</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <span class="review-count">(78)</span>
          </div>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$129.99</span>
              <span class="original-price">$149.99</span>
            </div>
          </div>
          <p class="product-description">
            Brew perfect coffee with this programmable coffee maker featuring temperature control and built-in grinder.
          </p>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>

      <!-- Product 6 -->
      <div class="product-card">
        <div class="product-image-container">
          <span class="badge">Bestseller</span>
          <img src="/assets/img/10.png" alt="Wireless Earbuds" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Audio</div>
          <div class="product-title">True Wireless Earbuds</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <span class="review-count">(312)</span>
          </div>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$129.99</span>
              <span class="original-price">$159.99</span>
            </div>
          </div>
          <p class="product-description">
            Experience crystal-clear sound with active noise cancellation and up to 30 hours of battery life with the
            charging case.
          </p>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>

      <!-- Product 7 -->
      <div class="product-card">
        <div class="product-image-container">
          <img src="/assets/img/10.png" alt="Smart Home Security Camera" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Smart Home</div>
          <div class="product-title">Smart Security Camera</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <span class="review-count">(64)</span>
          </div>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$89.99</span>
              <span class="original-price">$109.99</span>
            </div>
          </div>
          <p class="product-description">
            Keep your home secure with HD video, motion detection, two-way audio, and night vision capabilities.
          </p>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>

      <!-- Product 8 -->
      <div class="product-card">
        <div class="product-image-container">
          <img src="/assets/img/10.png" alt="Gaming Laptop" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Computers</div>
          <div class="product-title">Pro Gaming Laptop</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <span class="review-count">(203)</span>
          </div>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$1499.99</span>
              <span class="original-price">$1699.99</span>
            </div>
          </div>
          <p class="product-description">
            Dominate your games with this powerful laptop featuring the latest processor, dedicated graphics, and high
            refresh rate display.
          </p>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div class="flex-view" id="flex-view">
      <!-- Product 1 - Flex View -->
      <div class="product-card">
        <div class="product-image-container">
          <span class="badge">New</span>
          <img src="/assets/img/10.png" alt="Premium Wireless Headphones" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Audio</div>
          <div class="product-title">Premium Wireless Noise-Cancelling Headphones</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <span class="review-count">(124)</span>
          </div>
          <p class="product-description">
            Experience immersive sound quality with these premium headphones featuring active noise cancellation
            technology, up to 30 hours of battery life, and comfortable over-ear design. Perfect for travel, work, or
            anywhere you want to enjoy your music without distractions.
          </p>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$299.99</span>
              <span class="original-price">$349.99</span>
            </div>
          </div>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>
      <div class="product-card">
        <div class="product-image-container">
          <span class="badge">New</span>
          <img src="/assets/img/10.png" alt="Premium Wireless Headphones" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Audio</div>
          <div class="product-title">Premium Wireless Noise-Cancelling Headphones</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <span class="review-count">(124)</span>
          </div>
          <p class="product-description">
            Experience immersive sound quality with these premium headphones featuring active noise cancellation
            technology, up to 30 hours of battery life, and comfortable over-ear design. Perfect for travel, work, or
            anywhere you want to enjoy your music without distractions.
          </p>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$299.99</span>
              <span class="original-price">$349.99</span>
            </div>
          </div>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>
      <div class="product-card">
        <div class="product-image-container">
          <span class="badge">New</span>
          <img src="/assets/img/10.png" alt="Premium Wireless Headphones" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Audio</div>
          <div class="product-title">Premium Wireless Noise-Cancelling Headphones</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <span class="review-count">(124)</span>
          </div>
          <p class="product-description">
            Experience immersive sound quality with these premium headphones featuring active noise cancellation
            technology, up to 30 hours of battery life, and comfortable over-ear design. Perfect for travel, work, or
            anywhere you want to enjoy your music without distractions.
          </p>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$299.99</span>
              <span class="original-price">$349.99</span>
            </div>
          </div>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>
      <div class="product-card">
        <div class="product-image-container">
          <span class="badge">New</span>
          <img src="/assets/img/10.png" alt="Premium Wireless Headphones" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Audio</div>
          <div class="product-title">Premium Wireless Noise-Cancelling Headphones</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <span class="review-count">(124)</span>
          </div>
          <p class="product-description">
            Experience immersive sound quality with these premium headphones featuring active noise cancellation
            technology, up to 30 hours of battery life, and comfortable over-ear design. Perfect for travel, work, or
            anywhere you want to enjoy your music without distractions.
          </p>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$299.99</span>
              <span class="original-price">$349.99</span>
            </div>
          </div>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>
      <div class="product-card">
        <div class="product-image-container">
          <span class="badge">New</span>
          <img src="/assets/img/10.png" alt="Premium Wireless Headphones" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Audio</div>
          <div class="product-title">Premium Wireless Noise-Cancelling Headphones</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <span class="review-count">(124)</span>
          </div>
          <p class="product-description">
            Experience immersive sound quality with these premium headphones featuring active noise cancellation
            technology, up to 30 hours of battery life, and comfortable over-ear design. Perfect for travel, work, or
            anywhere you want to enjoy your music without distractions.
          </p>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$299.99</span>
              <span class="original-price">$349.99</span>
            </div>
          </div>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>
      <div class="product-card">
        <div class="product-image-container">
          <span class="badge">New</span>
          <img src="/assets/img/10.png" alt="Premium Wireless Headphones" class="product-image">
          <div class="card-top-actions">
            <button class="action-btn" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn" aria-label="Quick view">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="category">Audio</div>
          <div class="product-title">Premium Wireless Noise-Cancelling Headphones</div>
          <div class="rating">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <span class="review-count">(124)</span>
          </div>
          <p class="product-description">
            Experience immersive sound quality with these premium headphones featuring active noise cancellation
            technology, up to 30 hours of battery life, and comfortable over-ear design. Perfect for travel, work, or
            anywhere you want to enjoy your music without distractions.
          </p>
          <div class="price-row">
            <div class="price-container">
              <span class="price">$299.99</span>
              <span class="original-price">$349.99</span>
            </div>
          </div>
          <button class="cta-button">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>

  <script>
    function switchView(viewType) {
      const gridView = document.getElementById('grid-view');
      const flexView = document.getElementById('flex-view');
      const gridBtn = document.querySelector('.grid-btn');
      const flexBtn = document.querySelector('.flex-btn');

      if (viewType === 'grid') {
        gridView.classList.add('active');
        flexView.classList.remove('active');
        gridBtn.classList.add('active');
        flexBtn.classList.remove('active');
      } else {
        gridView.classList.remove('active');
        flexView.classList.add('active');
        gridBtn.classList.remove('active');
        flexBtn.classList.add('active');
      }
    }
  </script>
</body>
</html>