import React from 'react';

function BlogArticleSection() {
  return (
    <section className="blog-article-section py-16 bg-blue-200">
      <div className="container mx-auto">
        <h2 data-aos="fade-up" className="text-2xl font-semibold text-primary text-center mb-8">
          Blog/Article Section
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div data-aos="fade-up" className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Article 1</h3>
            <p className="text-gray-700">How To Successfully Handle Difficult Files</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Article 2</h3>
            <p className="text-gray-700">Get Every Single Article of Blogs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogArticleSection;
