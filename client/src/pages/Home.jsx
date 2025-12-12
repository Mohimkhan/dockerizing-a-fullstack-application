import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
      const data = await response.json();

      setUsers(data?.data);
    };
    fetchUsers();
  }, [JSON.stringify(users)]);

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">My App</div>
        <div className="nav-links">
          <button className="nav-btn">Features</button>
          <button className="nav-btn">About</button>
          <button className="nav-btn primary">Get Started</button>
        </div>
      </nav>

      <main className="hero-section">
        <h1 className="hero-title">
          Build Faster with <br />
          <span className="gradient-text">Modern Tools</span>
          <span className="users-count">{users.length}</span>
          <div>
            {users?.length != 0
              ? users?.map((user) => (
                  <table
                    style={{
                      fontSize: "20px",
                      border: "1px solid white",
                      textAlign: "left",
                      padding: "10px",
                      display: "inline-table",
                      tableLayout: "fixed",
                    }}
                    key={user._id}
                  >
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>{user.name}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{user.email}</td>
                      </tr>
                    </tbody>
                  </table>
                ))
              : "No users"}
          </div>
          <div>
            <h4 style={{ margin: "0px", marginTop: "20px" }}>Add Users</h4>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: e.target.name.value,
                    email: e.target.email.value,
                  }),
                });
                const data = await response.json();

                setUsers((prevUsers) => [...prevUsers, data?.data]);

                e.target.reset();
                alert(JSON.stringify(data));
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
              />
              <button type="submit">Add User</button>
            </form>
          </div>
        </h1>
        <p className="hero-subtitle">
          Experience the next generation of frontend tooling. Fast, reliable,
          and designed for the modern web.
        </p>

        <div className="cta-buttons">
          <button className="cta-btn primary">Start Building</button>
          <button className="cta-btn secondary">Learn More</button>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon blue">⚡</div>
            <h3>Lightning Fast</h3>
            <p>
              Instant server start and lightning fast HMR that stays fast
              regardless of app size.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon emerald">🛠️</div>
            <h3>Rich Features</h3>
            <p>Out-of-the-box support for TypeScript, JSX, CSS and more.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon purple">📦</div>
            <h3>Optimized Build</h3>
            <p>
              Pre-configured Rollup build with multi-page and library mode
              support.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
