const utils = require('../utils');

module.exports = function (locals) {
  let posts = locals.posts.sort('-date').toArray(),
    pages = locals.pages
    customs = [];

  posts = posts.map((post) => {
    post.__post = true;

    return {
      path: `/post/${post.slug}/index.html`,
      layout: 'index',
      data: post
    };
  });

  pages = pages.map((page) => {
    page.__page = true;

    return {
      path: utils.classifyPage(page) + '.html',
      layout: 'index',
      data: page
    };
  })

  // customs.push({
  //   path: '/search/index.html',
  //   layout: 'index',
  //   data: {}
  // });

  return [...posts, ...pages, ...customs];
}