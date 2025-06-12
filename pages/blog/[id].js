// pages/blog/[id].js
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  // Define the content for each post
  const postContent = {
    1: {
      title: "How I Built My First React App",
      image: "/images/post1.jpeg",
      description: "How I Created My First React App Embarking on my journey to build my first React app was both exhilarating and a bit daunting. As a budding developer, I’d heard about React’s popularity for creating dynamic, user-friendly interfaces, and I was eager to dive in. My project was a university finder app, designed to help students discover universities based on their preferences, like country, major, and budget. Here’s how I brought it to life.I started by setting up my development environment. I installed Node.js and npm, which are essential for managing packages and running scripts. Then, I used Create React App, a popular tool that scaffolds a new React project with all the necessary configurations. It was a relief to have a pre-built setup, as it let me focus on learning React rather than wrestling with build tools. I ran the command to generate the project, and soon, I had a basic app running on my local server, displaying a simple “Hello, World!” page in my browser. Next, I dove into React’s core concepts: components, props, and state. Components were like building blocks for my app. I created a header component for navigation, a form component to collect user inputs (like GPA and IELTS scores), and a results component to display university recommendations. Learning how to pass data between components using props was a game-changer—it made my app modular and reusable. State management was trickier. I used React’s useState hook to handle dynamic data, like updating the list of universities when a user submitted their preferences. It took some trial and error to understand how state updates trigger re-renders, but once it clicked, I felt like I was unlocking React’s true power. Styling the app was another exciting step. I opted for CSS modules to keep styles scoped to specific components, avoiding the mess of global CSS. This gave my university finder a clean, professional look without much hassle. I also integrated an API to fetch university data, which was my first taste of connecting a front-end to a backend. Handling asynchronous data fetching with useEffect was a learning curve, but seeing real university recommendations appear on the screen was incredibly rewarding. Deploying the app was the final hurdle. I chose Vercel for its simplicity, and after connecting my GitHub repository, my app was live on the web in minutes. Looking back, creating my first React app taught me not just technical skills but also the importance of breaking problems into smaller pieces and iterating. It wasn’t perfect, but it was mine, and it sparked my passion for front-end development. If you’re starting out, don’t be afraid to experiment—React’s flexibility makes it a fantastic playground for beginners",
    },
    2: {
      title: "Understanding Next.js: A Deep Dive",
      image: "/images/post2.png",
      description: "Deep Dive into Next.js After building my first React app, I wanted to level up my skills and create more performant, SEO-friendly web applications. That’s when I discovered Next.js, a React framework that promised to make my development life easier and my apps more powerful. Diving into Next.js was like finding a treasure chest of features that addressed the limitations I’d faced with vanilla React. Here’s my journey exploring its capabilities. My first impression of Next.js was its seamless setup. I started a new project with a single command, which gave me a pre-configured environment with sensible defaults. Unlike my earlier React project, where I had to configure routing manually, Next.js offered file-based routing out of the box. Creating a new page was as simple as adding a file to the pages directory. For my university finder app, this meant I could quickly set up routes for the homepage, search form, and results page without writing extra code. One of Next.js’s standout features was its support for server-side rendering and static site generation. I experimented with both to understand their benefits. Server-side rendering was perfect for dynamic pages, like displaying real-time university recommendations based on user input. Static site generation, on the other hand, allowed me to pre-render pages with static content, like an about page, which loaded lightning-fast and improved SEO. Learning when to use each method helped me optimize my app’s performance and user experience. API routes were another game-changer. Next.js let me create backend endpoints within the same project, which was ideal for my university finder. I built an API route to mock fetching university data, which simplified testing before integrating with a real backend. This feature made Next.js feel like a full-stack framework, reducing the need for a separate server. Styling in Next.js was flexible. I explored CSS modules, Tailwind CSS, and even tried styled-components, appreciating how Next.js supported them all without extra configuration. The framework’s built-in image optimization was a pleasant surprise, automatically resizing images for faster load times, which was great for university logos and banners in my app. Deploying with Next.js was a breeze, thanks to Vercel, the platform created by Next.js’s developers. I pushed my code to GitHub, connected it to Vercel, and had a production-ready app with automatic scaling and domain setup. The learning curve wasn’t steep, but I did spend time understanding concepts like incremental static regeneration to keep my app’s data fresh without rebuilding everything. Next.js transformed how I approached web development. It combined the simplicity of React with powerful features like server-side rendering, API routes, and easy deployment. For anyone looking to build modern, scalable web apps, Next.js is a tool worth diving into—it’s like React with superpowers.",
    },
    3: {
      title: "Why I Love JavaScript",
      image: "/images/post3.jpeg",
      description: "Why I Love JavaScript JavaScript has become my go-to programming language, and it’s not hard to see why. As I worked on my university finder project, JavaScript’s versatility, community, and sheer power won me over. It’s the backbone of modern web development, and my journey with it has been nothing short of exciting. Here’s why I’ve fallen in love with JavaScript. First, JavaScript’s ability to run everywhere is unmatched. Whether it’s in the browser, on the server with Node.js, or even in mobile apps, JavaScript adapts effortlessly. For my university finder, I used JavaScript to handle interactive front-end features like form validation and dynamic university lists in React. Later, I explored Node.js to build a simple backend API, all in the same language. This universality meant I could focus on learning one language deeply rather than juggling multiple ones. The ecosystem around JavaScript is another reason I’m hooked. The npm registry is like a candy store for developers, offering libraries and frameworks for every need. For my project, I leaned on packages like Axios for API calls and React for building a slick user interface. The community’s constant innovation means there’s always a tool or tutorial to solve my problems, whether it’s debugging a tricky state issue or optimizing performance. JavaScript’s flexibility is both a strength and a joy. I love how I can write functional code with arrow functions and map/reduce or go object-oriented with classes. When building my app’s search form, I used array methods to filter universities based on user input, which felt intuitive and elegant. JavaScript’s asynchronous capabilities, like promises and async/await, made handling API calls smooth and efficient, ensuring my app stayed responsive. The language’s evolution keeps me excited. Modern JavaScript, with features like destructuring, spread operators, and optional chaining, makes coding cleaner and more enjoyable. I remember refactoring my university finder’s code to use these features, turning clunky logic into concise, readable snippets. Plus, JavaScript’s huge community means there’s always something new to learn, from frameworks like Next.js to tools like Vite. Of course, JavaScript isn’t perfect—debugging can be a headache, and its loose typing sometimes trips me up. But those challenges have taught me to write better, more robust code. JavaScript’s versatility, rich ecosystem, and constant growth make it a language I love working with. It’s empowered me to build a functional, user-friendly university finder, and I can’t wait to see where it takes me next.",
    },
  };

  // Fetch post details based on the id
  const post = postContent[id];

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">{post.title}</h1>

      {/* Image Section */}
      <div className="text-center mb-4">
        <img
          src={post.image}
          alt={post.title}
          className="img-fluid rounded shadow-sm"
          style={{ maxHeight: '800px', width:'300px', objectFit: 'cover' }}
        />
      </div>

      {/* Description Section */}
      <p className="lead">{post.description}</p>
    </div>
  );
}
