yarn build && cd build
git init
git remote add origin git@github.com:dogbeide/dogbeide.github.io.git
git pull
echo "# dogbeide.github.io" >> README.md
git add README.md
git add -A
git commit -m "first commit"
git push -u origin master
