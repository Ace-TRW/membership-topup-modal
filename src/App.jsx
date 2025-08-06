import React, { useState } from 'react';
import MembershipTopUpModal from './components/MembershipTopUpModal';
import './App.css';

function App() {
  const [days, setDays] = useState(200);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Calculate price based on days (example pricing logic)
  const pricePerDay = 1.50;
  const baseDiscount = 0.10; // 10% base discount
  const bulkDiscount = days > 180 ? 0.05 : 0; // Extra 5% for 6+ months
  const totalDiscount = baseDiscount + bulkDiscount;
  
  const originalPrice = days * pricePerDay;
  const discountAmount = originalPrice * totalDiscount;
  const finalPrice = originalPrice - discountAmount;
  const discountPercentage = (totalDiscount * 100).toFixed(2);
  
  // Format duration string
  const months = Math.floor(days / 30);
  const remainingDays = days % 30;
  const durationString = months > 0 
    ? `${months} month${months > 1 ? 's' : ''}${remainingDays > 0 ? `, ${remainingDays} days` : ''}`
    : `${days} days`;

  const handleSliderChange = (e) => {
    setDays(parseInt(e.target.value));
  };

  const handlePayWithCrypto = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Top Up Your Membership</h1>
        <p className="subtitle">Choose your subscription duration</p>
        
        <div className="slider-container">
          <div className="slider-labels">
            <span>30 days</span>
            <span className="current-days">{days} days</span>
            <span>365 days</span>
          </div>
          <input
            type="range"
            min="30"
            max="365"
            value={days}
            onChange={handleSliderChange}
            className="slider"
          />
        </div>

        <div className="pricing-card">
          <div className="duration-display">
            <span className="duration-label">Duration:</span>
            <span className="duration-value">{durationString}</span>
          </div>
          
          <div className="price-breakdown">
            <div className="price-row">
              <span>Original Price:</span>
              <span className="original-price">${originalPrice.toFixed(2)}</span>
            </div>
            <div className="price-row discount-row">
              <span>Discount ({discountPercentage}%):</span>
              <span className="discount-amount">-${discountAmount.toFixed(2)}</span>
            </div>
            <div className="price-row total-row">
              <span>Total:</span>
              <span className="final-price">${finalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="payment-buttons">
            <button className="pay-button pay-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              Pay with Card
            </button>
            <button className="pay-button pay-crypto" onClick={handlePayWithCrypto}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
              </svg>
              Pay with Crypto
              {totalDiscount > baseDiscount && (
                <span className="extra-badge">Save {discountPercentage}%</span>
              )}
            </button>
          </div>
        </div>

        <div className="info-text">
          <p>💡 Tip: Longer subscriptions unlock bigger discounts!</p>
        </div>
      </div>

      <MembershipTopUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        topUpAmount={finalPrice}
        topUpDuration={durationString}
        discountPercentage={discountPercentage}
      />
    </div>
  );
}

export default App;