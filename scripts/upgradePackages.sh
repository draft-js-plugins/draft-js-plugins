rm -rf node_modules
ncu -u
npm install
plugins=$(find . -type d -name "draft-js-*")
for plugin in $plugins
do
    cd ${plugin}
    currentDirectory=$(pwd)
    echo $currentDirectory
    rm -rf node_modules
    ncu -u
    npm install
    cd ..
done
