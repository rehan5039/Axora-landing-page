import AxoraMeditationPartner from './AxoraMeditationPartner';

// Array of all blog posts (currently only the Hinglish Axora article)
const allBlogPosts = [
  AxoraMeditationPartner
];

// Function to get a blog post by ID
export const getBlogPostById = (id) => {
  return allBlogPosts.find(post => post.id === Number(id)) || null;
};

// Function to get a blog post by slug
export const getBlogPostBySlug = (slug) => {
  return allBlogPosts.find(post => post.slug === slug) || null;
};

// Function to get related posts
export const getRelatedPosts = (postId) => {
  const post = getBlogPostById(postId);
  if (!post) return [];
  
  return post.relatedPosts.map(id => getBlogPostById(id)).filter(Boolean);
};

// Function to get posts by category
export const getPostsByCategory = (category) => {
  if (category === 'all') return allBlogPosts;
  return allBlogPosts.filter(post => post.category === category);
};

export default allBlogPosts; 