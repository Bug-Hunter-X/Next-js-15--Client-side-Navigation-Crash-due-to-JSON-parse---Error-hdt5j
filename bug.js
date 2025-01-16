```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```

```javascript
// pages/about.js
function About() {
  // This is where the error occurs
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  return (
    <div>
      <h1>About Page</h1>
      {/* This line is never reached if localStorage.getItem('user') is null or not a valid JSON string */}
      <p>Welcome, {user.name}</p>
    </div>
  );
}

export default About;
```