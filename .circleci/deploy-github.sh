git config --global user.email $GH_EMAIL
git config --global user.name $GH_NAME

git clone $CIRCLE_REPOSITORY_URL build

cd build
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
git rm -rf .
cd ..

npm run build

cp -a dist/. build/.

mkdir -p build/.circleci && cp -a .circleci/. build/.circleci/.
cd build

git add -A
git commit -m "Automated deployment to GitHub Pages: ${CIRCLE_SHA1}" --allow-empty

git push origin $TARGET_BRANCH
