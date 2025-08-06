import React, { useState, useEffect } from 'react';
import { Wallet, ArrowRight, CheckCircle, Info, X, Zap, Unlock } from 'lucide-react';

const MembershipTopUpModal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
      alignItems: isMobile ? 'flex-start' : 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: isMobile ? '0' : '20px',
      overflowY: 'auto',
    },
    modal: {
      backgroundColor: '#0f1318',
      borderRadius: isMobile ? '0' : '24px',
      maxWidth: '520px',
      width: '100%',
      minHeight: isMobile ? '100vh' : 'auto',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
      margin: isMobile ? '0' : '20px auto',
    },
    header: {
      padding: isMobile ? '20px 16px 16px' : '24px 24px 20px',
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
      marginBottom: isMobile ? '8px' : '12px',
    },
    badgeText: {
      fontSize: '12px',
      fontWeight: '600',
      color: '#f0b86c',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    title: {
      fontSize: isMobile ? '20px' : '24px',
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
      padding: isMobile ? '16px' : '24px',
    },
    stepsContainer: {
      marginBottom: isMobile ? '16px' : '24px',
    },
    step: {
      display: 'flex',
      gap: isMobile ? '12px' : '16px',
      marginBottom: isMobile ? '16px' : '20px',
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
      width: isMobile ? '40px' : '48px',
      height: isMobile ? '40px' : '48px',
      borderRadius: isMobile ? '10px' : '12px',
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
      fontSize: isMobile ? '15px' : '16px',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '4px',
    },
    stepDescription: {
      fontSize: isMobile ? '12px' : '13px',
      color: '#64748b',
      lineHeight: '1.4',
    },
    connector: {
      width: '2px',
      height: isMobile ? '16px' : '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      marginLeft: isMobile ? '19px' : '23px',
      marginTop: isMobile ? '-16px' : '-20px',
      marginBottom: '0',
    },
    infoBox: {
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderRadius: '12px',
      padding: isMobile ? '14px' : '16px',
      marginBottom: '12px',
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
      fontSize: isMobile ? '12px' : '13px',
      color: '#94a3b8',
      lineHeight: '1.5',
    },
    highlight: {
      color: '#f0b86c',
      fontWeight: '600',
    },
    footer: {
      padding: isMobile ? '16px' : '20px 24px',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      gap: isMobile ? '8px' : '12px',
      flexDirection: isSmallMobile ? 'column' : 'row',
    },
    button: {
      flex: 1,
      padding: isMobile ? '12px 20px' : '14px 24px',
      borderRadius: '12px',
      border: 'none',
      fontSize: isMobile ? '14px' : '15px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: isSmallMobile ? '100%' : 'auto',
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

  const iconSize = isMobile ? 20 : 24;

  const steps = [
    {
      icon: <Wallet size={iconSize} color="#f0b86c" />,
      title: 'Deposit to your wallet address',
      description: 'Send crypto directly to your personal TRW deposit address',
      status: currentStep >= 0 ? 'active' : 'default',
    },
    {
      icon: <Zap size={iconSize} color="#f0b86c" />,
      title: 'Instant membership extension',
      description: 'We\'ll automatically deduct the membership fee from your deposit',
      status: currentStep >= 1 ? 'active' : 'default',
    },
    {
      icon: <CheckCircle size={iconSize} color="#10b981" />,
      title: 'Extension confirmed',
      description: 'Your membership is extended and any remaining balance is saved',
      status: currentStep >= 2 ? 'active' : 'default',
    },
    {
      icon: <Unlock size={iconSize} color="#a855f7" />,
      title: 'Unlock full wallet access',
      description: 'Complete wallet setup anytime to access your funds and features',
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
              <span style={styles.badgeText}>Instant Top-Up</span>
            </div>
            <h2 style={styles.title}>Top Up with Crypto</h2>
            <p style={styles.subtitle}>
              Deposit directly to extend membership - no wallet setup required
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
                <h4 style={styles.infoTitle}>Start Immediately</h4>
                <p style={styles.infoText}>
                  <span style={styles.highlight}>No wallet setup required.</span> Simply deposit crypto to 
                  your personal address and we'll automatically extend your membership.
                </p>
              </div>
            </div>
          </div>

          <div style={{...styles.infoBox, backgroundColor: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)'}}>
            <div style={styles.infoBoxHeader}>
              <Unlock size={20} color="#a855f7" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{...styles.infoTitle, color: '#a855f7'}}>After Extending</h4>
                <p style={styles.infoText}>
                  Complete wallet activation anytime to access your remaining balance, send funds to 
                  friends, and unlock all wallet features. <span style={{fontWeight: '600'}}>Completely optional.</span>
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
            Get Deposit Address
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipTopUpModal;