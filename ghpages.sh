#!/usr/bin/env bash

# create gh-pages branch
# run once before deploy
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Init"
git checkout master