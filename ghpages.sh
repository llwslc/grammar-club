#!/usr/bin/env bash

# create gh-pages branch
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Init"
git checkout master