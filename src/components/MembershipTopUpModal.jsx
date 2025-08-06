import React, { useState, useEffect } from "react";

// Icon Components (inline SVG - zero external dependencies)
const WalletIcon = ({ size = 24, color = "#94a3b8" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  </svg>
);

const ZapIcon = ({ size = 24, color = "#94a3b8" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const CheckCircleIcon = ({ size = 24, color = "#94a3b8" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const XIcon = ({ size = 18, color = "#64748b" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const UnlockIcon = ({ size = 20, color = "#a855f7" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>
);

const CheckIcon = ({ size = 16, color = "#10b981" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowRightIcon = ({ size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ArrowLeftIcon = ({ size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const MembershipTopUpModal = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [view, setView] = useState("main");
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
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      backdropFilter: "blur(10px)",
      display: "flex",
      alignItems: isMobile ? "flex-start" : "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: isMobile ? "0" : "20px",
      overflowY: "auto",
    },
    modal: {
      backgroundColor: "#0f1318",
      borderRadius: isMobile ? "0" : "24px",
      maxWidth: "520px",
      width: "100%",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
      display: "flex",
      flexDirection: "column",
      maxHeight: isMobile ? "100vh" : "90vh",
      margin: isMobile ? "0" : "20px auto",
    },
    header: {
      padding: isMobile ? "20px 16px 16px" : "24px 24px 20px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      flexShrink: 0,
    },
    headerContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    titleGroup: {
      flex: 1,
      paddingRight: "16px",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 10px",
      backgroundColor: "rgba(240, 184, 108, 0.15)",
      borderRadius: "8px",
      marginBottom: isMobile ? "8px" : "12px",
    },
    badgeText: {
      fontSize: "12px",
      fontWeight: "600",
      color: "#f0b86c",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    title: {
      fontSize: isMobile ? "20px" : "24px",
      fontWeight: "700",
      color: "#ffffff",
      margin: 0,
      marginBottom: "8px",
    },
    subtitle: {
      fontSize: "14px",
      color: "#94a3b8",
      lineHeight: "1.4",
      margin: 0,
    },
    closeButton: {
      width: "32px",
      height: "32px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "background-color 0.2s",
      flexShrink: 0,
    },
    content: {
      padding: isMobile ? "16px" : "24px",
      flex: "1 1 auto",
      overflowY: "auto",
      transition: "opacity 0.2s ease-in-out",
    },
    view: {
      opacity: 1,
      transition: "opacity 0.2s ease-in-out",
    },
    stepsContainer: {
      position: "relative",
    },
    step: {
      display: "flex",
      gap: isMobile ? "12px" : "16px",
      alignItems: "center",
    },
    stepIcon: {
      width: isMobile ? "40px" : "48px",
      height: isMobile ? "40px" : "48px",
      borderRadius: isMobile ? "10px" : "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    stepContent: {
      flex: 1,
    },
    stepTitle: {
      fontSize: isMobile ? "15px" : "16px",
      fontWeight: "600",
      color: "#ffffff",
      margin: 0,
      marginBottom: "4px",
    },
    stepDescription: {
      fontSize: isMobile ? "12px" : "13px",
      color: "#64748b",
      lineHeight: "1.4",
      margin: 0,
    },
    connector: {
      position: "absolute",
      width: "2px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      left: isMobile ? "19px" : "23px",
      top: isMobile ? "40px" : "48px",
      height: isMobile ? "calc(100% - 80px)" : "calc(100% - 96px)",
    },
    infoBox: {
      backgroundColor: "rgba(168, 85, 247, 0.1)",
      borderRadius: "12px",
      padding: isMobile ? "14px" : "16px",
      marginTop: isMobile ? "20px" : "24px",
      border: "1px solid rgba(168, 85, 247, 0.2)",
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
    },
    infoText: {
      fontSize: isMobile ? "12px" : "13px",
      color: "#94a3b8",
      lineHeight: "1.5",
      margin: 0,
    },
    highlight: {
      color: "#a855f7",
      fontWeight: "600",
    },
    footer: {
      padding: isMobile ? "16px" : "20px 24px",
      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      display: "flex",
      gap: isMobile ? "8px" : "12px",
      flexShrink: 0,
      flexDirection: isSmallMobile ? "column" : "row",
    },
    button: {
      flex: 1,
      padding: isMobile ? "12px 20px" : "14px 24px",
      borderRadius: "12px",
      border: "none",
      fontSize: isMobile ? "14px" : "15px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.2s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      width: isSmallMobile ? "100%" : "auto",
    },
    primaryButton: {
      backgroundColor: "#f0b86c",
      color: "#000000",
    },
    secondaryButton: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      color: "#ffffff",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    faqSection: {
      marginBottom: isMobile ? "24px" : "32px",
    },
    faqItem: {
      marginBottom: isMobile ? "20px" : "24px",
    },
    faqQuestion: {
      fontSize: isMobile ? "14px" : "15px",
      fontWeight: "600",
      color: "#ffffff",
      marginBottom: "8px",
    },
    faqAnswer: {
      fontSize: isMobile ? "13px" : "14px",
      color: "#94a3b8",
      lineHeight: "1.6",
    },
    benefitsList: {
      margin: "12px 0 0 0",
      paddingLeft: "0",
      listStyle: "none",
    },
    benefitItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      marginBottom: "12px",
      fontSize: isMobile ? "13px" : "14px",
      color: "#94a3b8",
      lineHeight: "1.6",
    },
    benefitTitle: {
      fontWeight: "600",
      color: "#ffffff",
    },
  };

  const iconSize = isMobile ? 20 : 24;

  const MainView = ({ steps }) => (
    <div style={styles.view}>
      <div style={styles.stepsContainer}>
        <div style={styles.connector}></div>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              ...styles.step,
              marginBottom: index === steps.length - 1 ? 0 : (isMobile ? "20px" : "24px"),
            }}
          >
            <div style={styles.stepIcon}>{step.icon}</div>
            <div style={styles.stepContent}>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.infoBox}>
        <div style={{ flexShrink: 0, marginTop: "2px" }}>
          <UnlockIcon size={20} />
        </div>
        <div>
          <p style={styles.infoText}>
            After your deposit,{" "}
            <a 
              href="#activate-wallet" 
              style={{
                ...styles.highlight,
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                e.preventDefault();
                console.log("Navigate to wallet activation");
                // In production, this would navigate to the wallet section
              }}
            >
              activate your full wallet
            </a>{" "}
            to unlock your remaining balance and enable future one-click extensions.
          </p>
        </div>
      </div>
    </div>
  );

  const FaqView = () => (
    <div style={styles.view}>
      <div style={styles.faqSection}>
        <div style={styles.faqItem}>
          <p style={styles.faqQuestion}>What if I change my mind?</p>
          <p style={styles.faqAnswer}>
            When you proceed, a pending top-up is created. If you don't deposit,
            you can cancel it anytime from your wallet's "Transactions" list. No
            funds are committed until you send them.
          </p>
        </div>
        <div style={styles.faqItem}>
          <p style={styles.faqQuestion}>
            What happens if I send more than the membership fee?
          </p>
          <p style={styles.faqAnswer}>
            We only deduct the exact discounted fee. Any extra funds are safely
            stored as your initial TRW Wallet balance. You can access them
            anytime after activating your wallet.
          </p>
        </div>
        <div style={styles.faqItem}>
          <p style={styles.faqQuestion}>Are there any hidden fees?</p>
          <p style={styles.faqAnswer}>
            TRW charges{" "}
            <span style={{ color: "#f0b86c", fontWeight: "600" }}>
              zero fees
            </span>{" "}
            for this deposit. You only pay the standard network fee from your
            external wallet. We also credit your account for the one-time wallet
            activation fee.
          </p>
        </div>
        <div style={styles.faqItem}>
          <p style={styles.faqQuestion}>How do I activate the full wallet?</p>
          <p style={styles.faqAnswer}>
            After your membership is extended, visit the 'Wallet' section in TRW.
            You'll be guided through a one-time security setup (creating a PIN and
            saving your recovery phrase). Once complete, your wallet is fully
            active.
          </p>
        </div>
        <div style={styles.faqItem}>
          <p style={styles.faqQuestion}>
            What are the benefits of full activation?
          </p>
          <ul style={styles.benefitsList}>
            <li style={styles.benefitItem}>
              <div style={{ flexShrink: 0, marginTop: "4px" }}>
                <CheckIcon size={16} />
              </div>
              <div>
                <span style={styles.benefitTitle}>One-click extensions:</span>{" "}
                Renew instantly from your wallet balance.
              </div>
            </li>
            <li style={styles.benefitItem}>
              <div style={{ flexShrink: 0, marginTop: "4px" }}>
                <CheckIcon size={16} />
              </div>
              <div>
                <span style={styles.benefitTitle}>Send funds:</span> Instantly
                send crypto to other TRW members.
              </div>
            </li>
            <li style={styles.benefitItem}>
              <div style={{ flexShrink: 0, marginTop: "4px" }}>
                <CheckIcon size={16} />
              </div>
              <div>
                <span style={styles.benefitTitle}>Full control:</span> Manage your
                balance and view transaction history.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setView("main"), 300);
  };

  const handleContinue = () => {
    console.log("Creating pending transaction and showing deposit address...");
    handleClose();
  };

  const steps = [
    {
      icon: <WalletIcon size={iconSize} />,
      title: "Get Your Deposit Address",
      description:
        "A permanent address that doubles as your personal TRW Wallet.",
    },
    {
      icon: <ZapIcon size={iconSize} />,
      title: "Send Any Amount of Crypto",
      description: "Deposit funds from your exchange or external wallet.",
    },
    {
      icon: <CheckCircleIcon size={iconSize} />,
      title: "Membership Extended Instantly",
      description:
        "We auto-deduct the 10% discounted fee. Extra funds are stored as your wallet balance.",
    },
  ];

  if (!isVisible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.titleGroup}>
              {view === "main" && (
                <div style={styles.badge}>
                  <span style={styles.badgeText}>SAVE 10% WITH CRYPTO</span>
                </div>
              )}
              <h2 style={styles.title}>
                {view === "main"
                  ? "Extend with a Simple Deposit"
                  : "How It Works"}
              </h2>
              <p style={styles.subtitle}>
                {view === "main"
                  ? "No full wallet setup required. Just send crypto."
                  : "Answering your questions about the deposit process."}
              </p>
            </div>
            <button
              style={styles.closeButton}
              onClick={handleClose}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.05)")
              }
            >
              <XIcon />
            </button>
          </div>
        </div>

        <div
          style={{
            ...styles.content,
            opacity: view === "main" ? 1 : 0,
            display: view === "main" ? "block" : "none",
          }}
        >
          <MainView steps={steps} />
        </div>
        <div
          style={{
            ...styles.content,
            opacity: view === "faq" ? 1 : 0,
            display: view === "faq" ? "block" : "none",
          }}
        >
          <FaqView />
        </div>

        <div style={styles.footer}>
          {view === "main" ? (
            <>
              <button
                style={{ ...styles.button, ...styles.secondaryButton }}
                onClick={() => setView("faq")}
              >
                Learn More
              </button>
              <button
                style={{ ...styles.button, ...styles.primaryButton }}
                onClick={handleContinue}
              >
                Show My Deposit Address
                <ArrowRightIcon />
              </button>
            </>
          ) : (
            <button
              style={{ ...styles.button, ...styles.secondaryButton, flex: 1 }}
              onClick={() => setView("main")}
            >
              <ArrowLeftIcon />
              Back to Deposit Steps
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembershipTopUpModal;