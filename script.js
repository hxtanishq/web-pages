
document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('post-form');
    postForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const title = document.getElementById('post-title').value;
      const content = document.getElementById('post-content').value;
  
      // Validate form data (you can add more validation here)
  
      // Create a new post object
      const newPost = {
        title: title,
        content: content,
        created_at: new Date().toISOString()
      };
  
      // Save the new post to local storage
      saveNewPost(newPost);
  
      // Reset the form fields
      postForm.reset();
  
      // Optional: Show a success message to the user
      alert('Post created successfully!');
    });
  });
  
  function saveNewPost(post) {
    let existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
  
    // Add the new post to the existing posts array
    existingPosts.push(post);
  
    // Save the updated posts array back to local storage
    localStorage.setItem('posts', JSON.stringify(existingPosts));
  }
  
  
  
  