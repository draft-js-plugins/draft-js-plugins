const path = require("path");
const _ = require("lodash");
const debug = require('debug');
const webpackLodashPlugin = require("lodash-webpack-plugin");

const getPackage = name => path.join(__dirname, '..', name, 'src')

const plugins = [
  'draft-js-plugins-editor',
  'draft-js-hashtag-plugin',
  'draft-js-linkify-plugin',
  'draft-js-anchor-plugin',
  'draft-js-mention-plugin',
  'draft-js-sticker-plugin',
  'draft-js-undo-plugin',
  'draft-js-emoji-plugin',
  'draft-js-drag-n-drop-plugin',
  'draft-js-drag-n-drop-upload-plugin',
  'draft-js-inline-toolbar-plugin',
  'draft-js-static-toolbar-plugin',
  'draft-js-side-toolbar-plugin',
  'draft-js-counter-plugin',
  'draft-js-focus-plugin',
  'draft-js-alignment-plugin',
  'draft-js-image-plugin',
  'draft-js-resizeable-plugin',
  'draft-js-buttons',
  'draft-js-video-plugin',
]


exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    if (fileNode.relativePath != null) {
      const parsedFilePath = path.parse(fileNode.relativePath);
      if (
        Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
        Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
      ) {
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      }
      if (
        Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
        Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
      ) {
        slug = `/${_.kebabCase(node.frontmatter.title)}`;
      } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      } else if (parsedFilePath.dir === "") {
        slug = `/${parsedFilePath.name}/`;
      } else {
        slug = `/${parsedFilePath.dir}/`;
      }
      createNodeField({ node, name: "slug", value: slug });
    }
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve("src/templates/post.jsx");
    const lessonPage = path.resolve("src/templates/lesson.jsx");
    const categoryPage = path.resolve("src/templates/category.jsx");

    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    title
                    type
                    category
                    tags
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set();
        const categorySet = new Set();

        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }

          if (edge.node.frontmatter.type === "post") {
            createPage({
              path: edge.node.fields.slug,
              component: postPage,
              context: {
                slug: edge.node.fields.slug
              }
            });
          } else if(edge.node.fields != null){
            createPage({
              path: edge.node.fields.slug,
              component: lessonPage,
              context: {
                slug: edge.node.fields.slug
              }
            });
          }
        });

        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category
            }
          });
        });
      })
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null);
  }

  config.merge({
      resolve: {
        alias: plugins.reduce((acc, name) => {
          return {
          ...acc,
          [name]: getPackage(name)
        }}, { stories: path.join(__dirname, '..', 'stories') })
      }
  });

  return config;
};
