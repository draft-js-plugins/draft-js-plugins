git checkout master
git checkout -b tmp-gh-pages
rm .gitignore

cd site
npm prune
npm install
npm run build

git add static/bundle.js
git commit -am 'add files'
cd ..
git subtree split --prefix site -b gh-pages
git push -f origin gh-pages:gh-pages
git checkout master
git branch -D tmp-gh-pages
git branch -D gh-pages
