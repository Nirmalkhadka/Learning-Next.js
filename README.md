
# My Portfolio with Next.js

This is a **personal portfolio website** built with **Next.js**. It showcases my skills, projects, and contact information, and includes dynamic functionalities such as a blog section, a contact form, and a comment system. The site is optimized for SEO, mobile responsiveness, and user experience.

## Features Implemented

### **1. Next.js Pages and Dynamic Routing**

* **Pages**:

  * The website has multiple pages, such as **Home**, **About Me**, **Blog**, and **Contact**.
  * Each page is created as a file in the `pages` directory, which is a core feature of Next.js for page routing.
  * The **dynamic routing** feature of Next.js is used for displaying individual blog posts based on a **slug**.

### **2. Static Site Generation (SSG) with `getStaticProps` and `getStaticPaths`**

* The **Blog** section utilizes **Static Site Generation (SSG)** to pre-render the blog post pages at build time. This ensures faster page loads and better SEO.
* **`getStaticProps`** is used to fetch data (like blog content) at build time and pass it as props to the page component.
* **`getStaticPaths`** generates the dynamic routes for each blog post based on the slugs.

#### Example Implementation:

```jsx
export async function getStaticProps({ params }) {
  const res = await fetch(`https://my-api.com/blog/${params.slug}`);
  const post = await res.json();
  
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://my-api.com/blog');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
```

### **3. API Routes**

* **API routes** are used for handling form submissions and storing data (e.g., comments, contact form submissions).
* For example, the **contact form** sends the form data to an API route where the **SendGrid** API sends the email to a specific address.
* The **comment section** uses a simple **in-memory database** (an array) to store and display comments.

#### Example Implementation:

```js
// API route for handling contact form submissions
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    // Call the SendGrid API to send the email
    const msg = {
      to: 'my-email@example.com',
      from: email,
      subject: `Message from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    try {
      await sendGridMail.send(msg);
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      return res.status(500).json({ message: 'Error sending message. Please try again.' });
    }
  }
}
```

### **4. Dynamic Content (Blog)**

* The **Blog** section pulls dynamic content (such as blog posts) from a **headless CMS** (like **Contentful** or **Sanity**).
* It fetches blog posts using the **Contentful API** and renders them dynamically.
* Blog pages are statically generated at build time using `getStaticProps` and `getStaticPaths`, ensuring faster load times and better SEO.

#### Example Implementation (Contentful Integration):

```js
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: 'blogPost' });
  
  return {
    props: {
      posts: res.items,
    },
  };
}
```

### **5. Dynamic Forms with API Integration**

* The **Contact Me** form sends data to the server using **API routes** and integrates with **SendGrid** to send emails to the specified address.
* Form data is passed as a **JSON payload** to the API route, and the response is handled using React state.

#### Example Implementation:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });

  if (res.ok) {
    setStatus('Message sent successfully!');
  } else {
    setStatus('Error sending message. Please try again.');
  }
};
```

### **6. Server-Side Rendering (SSR)**

* **Server-side rendering (SSR)** can be used for dynamic content that needs to be fetched on each request, ensuring fresh data is provided to the client.
* In this project, we are primarily using **SSG** for static content and **API routes** to handle data on the server side.

---

## How to Run the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file to store your environment variables:

   ```
   NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your-space-id
   NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your-access-token
   SENDGRID_API_KEY=your-sendgrid-api-key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit:

   ```text
   http://localhost:3000
   ```

---

## Technologies Used

* **Next.js**: For building the server-side rendered React app.
* **React**: JavaScript library for building the user interface.
* **Bootstrap**: For responsive design and pre-styled components.
* **Contentful**: Headless CMS to fetch blog posts and manage content.
* **SendGrid**: Email service for handling form submissions and sending contact emails.
* **Vercel**: Deployment platform for Next.js apps.

---

## Next.js Features Implemented

1. **Static Site Generation (SSG)**:

   * We used `getStaticProps` and `getStaticPaths` for blog pages, which ensures faster page loads by pre-generating content at build time.

2. **API Routes**:

   * We created custom API routes (`/api/contact` and `/api/comments`) for handling dynamic operations, like sending emails and storing comments.

3. **Dynamic Routing**:

   * We created dynamic routes for individual blog posts using slugs (`/blog/[slug]`), which allows us to fetch content for each post dynamically.

4. **SEO Optimization**:

   * We used the `<Head>` component for adding metadata (title, description, social media preview) to enhance SEO for each page, such as the home page and blog pages.

5. **Incremental Static Regeneration (ISR)**:

   * Blog pages are statically generated at build time, but if the content changes, ISR ensures that new pages are built in the background without blocking requests.

---

## Deployment

This project is deployed on **Vercel**. Here's how you can deploy:

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and create an account if you haven't already.
3. Link your GitHub repository to Vercel.
4. Deploy the project, and Vercel will automatically detect that it's a Next.js app and deploy it.
5. You will get a live URL for your portfolio!

---