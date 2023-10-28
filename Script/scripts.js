
function startTicker() {
  const newsTicker = document.querySelector('.news-ticker ul');
  const newsItems = document.querySelectorAll('.news-ticker li');
  let currentIndex = 0;

  setInterval(() => {
      newsItems[currentIndex].style.opacity = '0';
      currentIndex = (currentIndex + 1) % newsItems.length;
      newsItems[currentIndex].style.opacity = '1';
  }, 500); // Adjust the duration (in milliseconds) for each news item
}

// Start the news ticker when the page loads
window.addEventListener('load', startTicker);
