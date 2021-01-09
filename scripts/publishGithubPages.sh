git checkout master
git branch -D gh-pages
git branch -D tmp-gh-pages
git checkout -b tmp-gh-pages
rm .gitignore

rm -rf node_modules/.cache

cd packages/docs
rm -rf out
yarn next build
yarn next export

git add out
git commit -am 'add files'
cd ../..
git subtree split --prefix packages/docs/out -b gh-pages
git push -f origin gh-pages:gh-pages
git checkout master
git branch -D tmp-gh-pages
git branch -D gh-pages
git clean -f
