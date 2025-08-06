import React, { useState, useEffect } from "react";
import {
  Wallet,
  ArrowRight,
  CheckCircle,
  X,
  Zap,
  Unlock,
  Check,
  ArrowLeft,
} from "lucide-react";

const MembershipTopUpModal = () => {
  // For demonstration. In production, use props: ({ isOpen, onClose })
  const [isVisible, setIsVisible] = useState(true);
  const [view, setView] = useState("main"); // 'main' or 'faq'
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
    faqSectionTitle: {
      fontSize: "12px",
      fontWeight: "600",
      color: "#f0b86c",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      marginBottom: isMobile ? "12px" : "16px",
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
        <Unlock
          size={20}
          color="#a855f7"
          style={{ flexShrink: 0, marginTop: "2px" }}
        />
        <div>
          <p style={styles.infoText}>
            Your deposit address is now your TRW Wallet. You can{" "}
            <span style={styles.highlight}>optionally activate it</span> anytime
            to:
          </p>
          <ul
            style={{
              margin: "8px 0 0 0",
              paddingLeft: "20px",
              fontSize: isMobile ? "12px" : "13px",
              color: "#94a3b8",
              lineHeight: "1.6",
            }}
          >
            <li style={{ marginBottom: "4px" }}>Access your remaining balance</li>
            <li>
              Enable one-click extensions via{" "}
              <span style={{ fontWeight: "600" }}>Send → Extend</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const FaqView = () => (
    <div style={styles.view}>
      <div style={styles.faqSection}>
        <h3 style={styles.faqSectionTitle}>The Basics</h3>
        <div style={styles.faqItem}>
          <p style={styles.faqQuestion}>
            What happens if I send more than the membership fee?
          </p>
          <p style={styles.faqAnswer}>
            We only deduct the exact membership fee. Any extra funds are safely
            stored as your initial TRW Wallet balance. You can access them
            anytime after activating your wallet.
          </p>
        </div>
        <div style={styles.faqItem}>
          <p style={styles.faqQuestion}>
            What's the difference between this deposit and a full wallet?
          </p>
          <p style={styles.faqAnswer}>
            This deposit is a "guest checkout" to get you extended fast.
            Activating the full wallet is an optional next step that gives you
            control to send, receive, and manage your balance.
          </p>
        </div>
        <div style={styles.faqItem}>
          <p style={styles.faqQuestion}>
            What if I get the address but change my mind?
          </p>
          <p style={styles.faqAnswer}>
            Nothing happens. The deposit address is yours permanently, but it
            remains inactive until you send funds to it. There's no penalty or
            pending transaction to cancel.
          </p>
        </div>
      </div>

      <div style={styles.faqSection}>
        <h3 style={styles.faqSectionTitle}>Security & Fees</h3>
        <div style={styles.faqItem}>
          <p style={styles.faqQuestion}>Is my money safe in this wallet?</p>
          <p style={styles.faqAnswer}>
            Yes. Your TRW Wallet is a{" "}
            <span style={{ color: "#10b981", fontWeight: "600" }}>
              self-custodial
            </span>{" "}
            wallet. This means you, and only you, have control over your funds via
            your security credentials. We can never access or move your crypto.
          </p>
        </div>
        <div style={styles.faqItem}>
          <p style={styles.faqQuestion}>
            Are there any hidden fees for this top-up?
          </p>
          <p style={styles.faqAnswer}>
            TRW charges{" "}
            <span style={{ color: "#f0b86c", fontWeight: "600" }}>
              zero fees
            </span>{" "}
            for this deposit. You will only pay the standard network fee to send
            crypto from your external exchange or wallet. As a courtesy, we also
            credit your account with the one-time wallet activation fee.
          </p>
        </div>
      </div>

      <div style={styles.faqSection}>
        <h3 style={styles.faqSectionTitle}>The Full Wallet</h3>
        <div style={styles.faqItem}>
          <p style={styles.faqQuestion}>
            What are the benefits of activating the full wallet?
          </p>
          <p style={styles.faqAnswer}>Full activation unlocks all features:</p>
          <ul style={styles.benefitsList}>
            <li style={styles.benefitItem}>
              <Check
                size={16}
                color="#10b981"
                style={{ flexShrink: 0, marginTop: "4px" }}
              />
              <div>
                <span style={styles.benefitTitle}>One-click extensions:</span>{" "}
                Renew your membership instantly from your wallet balance.
              </div>
            </li>
            <li style={styles.benefitItem}>
              <Check
                size={16}
                color="#10b981"
                style={{ flexShrink: 0, marginTop: "4px" }}
              />
              <div>
                <span style={styles.benefitTitle}>Send funds:</span> Instantly
                send crypto to other TRW members.
              </div>
            </li>
            <li style={styles.benefitItem}>
              <Check
                size={16}
                color="#10b981"
                style={{ flexShrink: 0, marginTop: "4px" }}
              />
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
    // In production, you'd call: onClose();
    setTimeout(() => setView("main"), 300); // Reset view after closing
  };

  const handleContinue = () => {
    console.log("Proceeding to show deposit address...");
    handleClose(); // Example: close modal on continue
  };

  const steps = [
    {
      icon: <Wallet size={iconSize} color="#94a3b8" />,
      title: "Get Your Deposit Address",
      description:
        "A permanent address that doubles as your personal TRW Wallet.",
    },
    {
      icon: <Zap size={iconSize} color="#94a3b8" />,
      title: "Send Any Amount of Crypto",
      description: "Deposit funds from your exchange or external wallet.",
    },
    {
      icon: <CheckCircle size={iconSize} color="#94a3b8" />,
      title: "Membership Extended Instantly",
      description:
        "We auto-deduct the fee. Extra funds are stored as your wallet balance.",
    },
  ];

  if (!isVisible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.titleGroup}>
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
              <X size={18} color="#64748b" />
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
                <ArrowRight size={18} />
              </button>
            </>
          ) : (
            <button
              style={{ ...styles.button, ...styles.secondaryButton, flex: 1 }}
              onClick={() => setView("main")}
            >
              <ArrowLeft size={18} />
              Back to Deposit Steps
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembershipTopUpModal;