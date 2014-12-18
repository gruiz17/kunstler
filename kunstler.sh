#!/bin/bash
touch dummy
git add dummy
bundle install
ruby server.rb
echo "going through commits now..."
ruby commit_script.rb
git push origin master
echo "enjoy <3"