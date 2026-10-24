import "./Footer.css";

function Footer({ email }) {
  return (
    <footer id="contact" className="footer">
      <p>Email: {email}</p>
      <p>
        <a href="https://github.com/24cs071-prince" target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </p>
      <p>© 2026 Student Portfolio</p>
    </footer>
  );
}

export default Footer;
