#!/bin/sh
set -xe

find . -name "*.[ch]" | xargs clang-format18 -i
ruff format
prettier . --write
rustfmt --edition 2018 src/**/*.rs
