import React from 'react';
import './index.css';

export default function App() {
  return (
    <main className="app">
      <header>
        <h1>Naveen S</h1>
        <h2>Senior Software Engineer</h2>
        <p>3 years of backend development experience</p>
      </header>

      <section>
        <h3>Skills</h3>
        <ul>
          <li>Python, Go, JavaScript</li>
	  <li>Mysql, MongoDB, redis</li>
          <li>FastAPI, Django, SQLAlchemy</li>
          <li>PostgreSQL, RabbitMQ, Celery</li>
          <li>AWS EC2, Docker, NGINX</li>
        </ul>
      </section>

      <section>
        <h3>Projects</h3>
        <ul>
          <li>
            <strong>Thermal Print Service (Go):</strong> Custom print server with client USB detection and ESC/POS commands.
          </li>
          <li>
            <strong>Http lib(Go):</strong> writing(rewriting) the rules for http request parsing and routing. (this one is still in progress)
          </li>
        </ul>
      </section>

      <footer>
        <p>Contact: naveen@example.com</p>
      </footer>
    </main>
  );
}

