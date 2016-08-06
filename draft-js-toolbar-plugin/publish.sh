#!/bin/sh
git pull

# updates the package.json to have a new version, uses version in commit msg
VERSION=$(npm version patch)
VERSION=$(echo $VERSION | cut -c 2-)

# In a monorepo setup, `npm version patch` will not automatically create a verion
# commit because the package.json is not in the same directory as the monorepo's
# .git directory. As a result, we need to create the version commit.
git add package.json
git commit -m $VERSION

PACKAGE=$(npm pack)
echo PACKAGE: $PACKAGE
curl -F package=@$PACKAGE https://C__hqNZ_HngaWmEnB-ps@push.fury.io/massdrop/
rm $PACKAGE
git push
