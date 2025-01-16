```javascript
// pages/about.js
function About() {
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch (error) {
    console.error('Error parsing user data from localStorage:', error);
    // Handle the error appropriately, e.g., display a default message
  }

  return (
    <div>
      <h1>About Page</h1>
      {user ? (
        <p>Welcome, {user.name}</p>
      ) : (
        <p>Welcome, Guest!</p> // Or other appropriate message
      )}
    </div>
  );
}

export default About;
```