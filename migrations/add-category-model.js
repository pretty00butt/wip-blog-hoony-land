module.exports = function (migration) {
  // New category content type.
  const category = migration.createContentType('category')
    .name('Category')
    .displayField('name');
  category.createField('name').type('Symbol').required(true).name('Name');
  category.createField('slug').type('Symbol').required(true).name('URL Slug').validations([{ "unique": true }]);
  category.createField('image').type('Link').linkType('Asset').name('Image');

  // Create a new category field in the blog post content type.
  const post = migration.editContentType('post')
  post.createField('category')  // Using a temporary id to be able to transform entries.
    .name('Category')
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        "linkContentType": ['category']
      }
    ])
}
