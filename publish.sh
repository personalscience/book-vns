#!/bin/bash
# publish.sh
set -e

echo "Rendering English book to /docs/en..."
cd en && quarto render --output-dir ../docs/en && cd ..

echo "Rendering Chinese book to /docs/zh..."
cd zh && quarto render --output-dir ../docs/zh && cd ..

echo "Build complete. Ready to push to GitHub."