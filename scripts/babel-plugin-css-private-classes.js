const { dirname, join } = require("path");
const fs = require("fs");
const postcss = require("postcss");
const genericNames = require("generic-names");
const makeDir = require("make-dir").sync;
const autoprefixer = require("autoprefixer");

const privateClasses = postcss.plugin("private-classes", options => {
  return (root, result) => {
    const { generateScopedName } = options;
    const { from, css } = root.source.input;
    const styles = {};
    root.walkRules(node => {
      node.selectors = node.selectors.map(selector => {
        return selector.replace(/\.[\w-]+/, classChunk => {
          const className = classChunk.slice(1);
          const generated = generateScopedName(className, from, css);
          styles[className] = generated;
          return "." + generated;
        });
      });
    });
    result.messages.push(styles);
  };
});

module.exports = (babel, options) => {
  const t = babel.types;
  const { localIdentName, dir } = options;

  return {
    visitor: {
      ImportDeclaration(path, state) {
        if (path.node.source.value.endsWith(".css")) {
          let localIdentifier = null;

          path.node.specifiers.forEach(node => {
            if (node.type === "ImportDefaultSpecifier") {
              localIdentifier = node.local;
            }
            if (node.type === "ImportNamespaceSpecifier") {
              throw Error("Namespaces are not supported");
            }
            if (node.type === "ImportSpecifier") {
              throw Error("Named imports are not supported");
            }
          });

          const cssInputFile = join(
            dirname(state.filename),
            path.node.source.value
          );

          const cssInputContent = fs.readFileSync(cssInputFile, "utf-8");
          const generateScopedName = genericNames(localIdentName);
          const { css: cssOutputContent, messages } = postcss([
            privateClasses({ generateScopedName }),
            autoprefixer
          ]).process(cssInputContent, {
            from: cssInputFile
          });

          const cssOutputFile = join(
            dir,
            genericNames("[name]-[hash:base64:5].css")(
              "a",
              cssInputFile,
              cssInputContent
            )
          );

          makeDir(dir);
          fs.writeFileSync(cssOutputFile, cssOutputContent);

          const [styles] = messages;

          path.replaceWith(
            t.variableDeclaration("var", [
              t.variableDeclarator(
                localIdentifier,
                t.objectExpression(
                  Object.entries(styles).map(([key, value]) =>
                    t.objectProperty(t.identifier(key), t.stringLiteral(value))
                  )
                )
              )
            ])
          );
        }
      }
    }
  };
};
