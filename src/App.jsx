import { createElement, useEffect, useState } from "react";
import {
    FaCodepen,
    FaCoffee,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaHandHoldingHeart,
    FaLinkedin,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa";
import {
    FiArrowRight,
    FiArrowUp,
    FiCheckCircle,
    FiCode,
    FiLayers,
    FiMenu,
    FiMonitor,
    FiPackage,
    FiX,
} from "react-icons/fi";

const features = [
    {
        icon: FiCode,
        title: "React 18",
        text: "A clean component entrypoint ready for your next interface.",
    },
    {
        icon: FiPackage,
        title: "Vite workflow",
        text: "Fast local development and a lightweight production build.",
    },
    {
        icon: FiMonitor,
        title: "Responsive base",
        text: "A simple layout that adapts across desktop and mobile screens.",
    },
];

const footerLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHandHoldingHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showTop, setShowTop] = useState(false);
    const year = new Date().getFullYear();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => setShowTop(window.scrollY > 420);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="page-shell" id="top">
            <header className="site-header">
                <div className="header-inner">
                    <a className="brand" href="#top" onClick={closeMenu}>
                        <img src="/logo.png" alt="" />
                        <span>
                            <strong>React Vite Basic</strong>
                            <small>Simple starter workspace</small>
                        </span>
                    </a>

                    <nav className="desktop-nav" aria-label="Primary navigation">
                        <a href="#features">Features</a>
                        <a href="#stack">Stack</a>
                    </nav>

                    <button
                        className="menu-button"
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                <nav
                    className={"mobile-nav " + (menuOpen ? "is-open" : "")}
                    aria-label="Mobile navigation"
                >
                    <a href="#features" onClick={closeMenu}>Features</a>
                    <a href="#stack" onClick={closeMenu}>Stack</a>
                </nav>
            </header>

            <main>
                <section className="hero-section">
                    <div className="hero-copy">
                        <p className="eyebrow">React starter</p>
                        <h1>Start small. Build something clear.</h1>
                        <p className="hero-text">
                            A clean React and Vite base for experimenting with components,
                            layouts, and frontend ideas without unnecessary setup.
                        </p>
                        <div className="hero-actions">
                            <a className="primary-button" href="#features">
                                Explore the starter <FiArrowRight />
                            </a>
                            <a className="text-link" href="https://github.com/a2rp/react-vite-basic" target="_blank" rel="noopener noreferrer">
                                View repository
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <img src="/image.png" alt="React Vite starter preview" />
                        <div className="visual-note">
                            <FiLayers />
                            <span>Ready for your next idea</span>
                        </div>
                    </div>
                </section>

                <section className="features-section" id="features">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">What is included</p>
                            <h2>A useful foundation without the noise.</h2>
                        </div>
                        <p>Keep the starter focused, then grow it as the project needs change.</p>
                    </div>
                    <div className="feature-grid">
                        {features.map(({ icon, title, text }) => {
                            const FeatureIcon = icon;
                            return (
                                <article className="feature-card" key={title}>
                                    <FeatureIcon />
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                    <FiCheckCircle className="check-icon" />
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="stack-section" id="stack">
                    <div>
                        <p className="eyebrow">Project stack</p>
                        <h2>Simple tools, clear defaults.</h2>
                    </div>
                    <div className="stack-list">
                        <span>React 18.2</span>
                        <span>Vite</span>
                        <span>JavaScript</span>
                        <span>CSS</span>
                        <span>GitHub Pages ready</span>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="footer-main">
                    <div>
                        <p className="footer-title">React Vite Basic</p>
                        <p className="footer-copy">
                            A small, reusable starting point for frontend experiments.
                        </p>
                    </div>
                    <div className="footer-links" aria-label="External links">
                        {footerLinks.map(({ label, href, icon }) => (
                            <a
                                key={label}
                                href={href}
                                title={label}
                                aria-label={label}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                                {createElement(icon)}
                            </a>
                        ))}
                    </div>
                </div>
                <p className="copyright">
                    Copyright © {year}{" "}
                    <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                        Ashish Ranjan
                    </a>
                </p>
            </footer>

            {showTop ? (
                <button
                    className="back-to-top"
                    type="button"
                    aria-label="Back to top"
                    title="Back to top"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <FiArrowUp />
                </button>
            ) : null}
        </div>
    );
}

export default App;
