import React, { useState } from 'react';
import { Wallet, ArrowRight, CheckCircle, Info, X, Zap, CreditCard, Gift } from 'lucide-react';

const MembershipTopUpModal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '0',
      overflowY: 'auto',
    },
    modal: {
      backgroundColor: '#0f1318',
      borderRadius: window.innerWidth <= 768 ? '0' : '24px',
      maxWidth: '520px',
      width: '100%',
      minHeight: window.innerWidth <= 768 ? '100vh' : 'auto',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
      margin: window.innerWidth <= 768 ? '0' : '20px auto',
    },
    header: {
      padding: window.innerWidth <= 768 ? '20px 16px 16px' : '24px 24px 20px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    headerContent: {
      flex: 1,
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      backgroundColor: 'rgba(240, 184, 108, 0.15)',
      borderRadius: '8px',
      marginBottom: window.innerWidth <= 768 ? '8px' : '12px',
    },
    badgeText: {
      fontSize: '12px',
      fontWeight: '600',
      color: '#f0b86c',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    title: {
      fontSize: window.innerWidth <= 768 ? '20px' : '24px',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '8px',
    },
    subtitle: {
      fontSize: '14px',
      color: '#94a3b8',
      lineHeight: '1.4',
    },
    closeButton: {
      width: '32px',
      height: '32px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    content: {
      padding: window.innerWidth <= 768 ? '16px' : '24px',
    },
    stepsContainer: {
      marginBottom: '24px',
    },
    step: {
      display: 'flex',
      gap: window.innerWidth <= 768 ? '12px' : '16px',
      marginBottom: window.innerWidth <= 768 ? '16px' : '20px',
      opacity: 0.5,
      transition: 'all 0.3s ease',
    },
    stepActive: {
      opacity: 1,
    },
    stepCompleted: {
      opacity: 0.7,
    },
    stepIcon: {
      width: window.innerWidth <= 768 ? '40px' : '48px',
      height: window.innerWidth <= 768 ? '40px' : '48px',
      borderRadius: window.innerWidth <= 768 ? '10px' : '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    stepIconDefault: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    stepIconActive: {
      backgroundColor: 'rgba(240, 184, 108, 0.15)',
      border: '1px solid rgba(240, 184, 108, 0.3)',
      boxShadow: '0 0 20px rgba(240, 184, 108, 0.2)',
    },
    stepIconCompleted: {
      backgroundColor: 'rgba(16, 185, 129, 0.15)',
      border: '1px solid rgba(16, 185, 129, 0.3)',
    },
    stepContent: {
      flex: 1,
    },
    stepTitle: {
      fontSize: window.innerWidth <= 768 ? '15px' : '16px',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '4px',
    },
    stepDescription: {
      fontSize: window.innerWidth <= 768 ? '12px' : '13px',
      color: '#64748b',
      lineHeight: '1.4',
    },
    connector: {
      width: '2px',
      height: window.innerWidth <= 768 ? '16px' : '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      marginLeft: window.innerWidth <= 768 ? '19px' : '23px',
      marginTop: window.innerWidth <= 768 ? '-16px' : '-20px',
      marginBottom: '0',
    },
    infoBox: {
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderRadius: '12px',
      padding: window.innerWidth <= 768 ? '14px' : '16px',
      marginBottom: window.innerWidth <= 768 ? '16px' : '24px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
    },
    infoBoxHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
    },
    infoTitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#3b82f6',
      marginBottom: '8px',
    },
    infoText: {
      fontSize: '13px',
      color: '#94a3b8',
      lineHeight: '1.5',
    },
    highlight: {
      color: '#f0b86c',
      fontWeight: '600',
    },
    footer: {
      padding: window.innerWidth <= 768 ? '16px' : '20px 24px',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      gap: window.innerWidth <= 768 ? '8px' : '12px',
      flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
    },
    button: {
      flex: 1,
      padding: window.innerWidth <= 768 ? '12px 20px' : '14px 24px',
      borderRadius: '12px',
      border: 'none',
      fontSize: window.innerWidth <= 768 ? '14px' : '15px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: window.innerWidth <= 480 ? '100%' : 'auto',
    },
    primaryButton: {
      backgroundColor: '#f0b86c',
      color: '#000000',
    },
    secondaryButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  };

  const iconSize = window.innerWidth <= 768 ? 20 : 24;
  
  const steps = [
    {
      icon: <Wallet size={iconSize} color="#f0b86c" />,
      title: 'Add funds to your TRW Wallet',
      description: 'Deposit crypto to your wallet using any supported network',
      status: currentStep >= 0 ? 'active' : 'default',
    },
    {
      icon: <Zap size={iconSize} color="#f0b86c" />,
      title: 'Wallet activation',
      description: 'We\'ll cover the network fee and activate your wallet instantly',
      status: currentStep >= 1 ? 'active' : 'default',
    },
    {
      icon: <CreditCard size={iconSize} color="#f0b86c" />,
      title: 'Automatic membership extension',
      description: 'Your membership will be extended immediately',
      status: currentStep >= 2 ? 'active' : 'default',
    },
    {
      icon: <Gift size={iconSize} color="#10b981" />,
      title: 'Activation fee credited back',
      description: 'The activation fee will be returned to your wallet as a courtesy',
      status: currentStep >= 3 ? 'active' : 'default',
    },
  ];

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      // Close modal logic here
    }, 300);
  };

  const handleContinue = () => {
    // Proceed with wallet top-up
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.badge}>
              <Zap size={14} />
              <span style={styles.badgeText}>New Wallet Feature</span>
            </div>
            <h2 style={styles.title}>Top Up with TRW Wallet</h2>
            <p style={styles.subtitle}>
              Extend your membership instantly using our built-in crypto wallet
            </p>
          </div>
          <button 
            style={styles.closeButton}
            onClick={handleClose}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
          >
            <X size={18} color="#64748b" />
          </button>
        </div>

        <div style={styles.content}>
          <div style={styles.stepsContainer}>
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div 
                  style={{
                    ...styles.step,
                    ...(step.status === 'active' ? styles.stepActive : {}),
                    ...(step.status === 'completed' ? styles.stepCompleted : {}),
                  }}
                  onMouseEnter={() => setCurrentStep(index)}
                >
                  <div 
                    style={{
                      ...styles.stepIcon,
                      ...(step.status === 'default' ? styles.stepIconDefault : {}),
                      ...(step.status === 'active' ? styles.stepIconActive : {}),
                      ...(step.status === 'completed' ? styles.stepIconCompleted : {}),
                    }}
                  >
                    {step.status === 'completed' ? (
                      <CheckCircle size={iconSize} color="#10b981" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepTitle}>{step.title}</h3>
                    <p style={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && <div style={styles.connector} />}
              </React.Fragment>
            ))}
          </div>

          <div style={styles.infoBox}>
            <div style={styles.infoBoxHeader}>
              <Info size={20} color="#3b82f6" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={styles.infoTitle}>Important Information</h4>
                <p style={styles.infoText}>
                  The wallet activation fee is <span style={styles.highlight}>completely free</span> for 
                  membership extensions. We'll cover the network fee upfront and credit it back to your 
                  wallet immediately after activation. This one-time setup enables instant future top-ups.
                </p>
                <p style={{...styles.infoText, marginTop: '12px'}}>
                  <span style={{fontWeight: '600'}}>Changed your mind?</span> You can cancel the pending 
                  top-up transaction anytime from your wallet's transaction history before it processes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          <button 
            style={{...styles.button, ...styles.secondaryButton}}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
          >
            Learn More
          </button>
          <button 
            style={{...styles.button, ...styles.primaryButton}}
            onClick={handleContinue}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0a85c'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f0b86c'}
          >
            Continue to Wallet
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipTopUpModal;