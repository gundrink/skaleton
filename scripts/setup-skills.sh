#!/usr/bin/env bash
# Installs the standard skill set for farm projects.
# Run once per machine. Safe to repeat.
set -euo pipefail

skills=(
  oso95/scroll-world
  kaankiziltug/logo-design-skill
  mksglu/context-mode
  blader/humanizer
  coreyhaines31/marketingskills
  nextlevelbuilder/ui-ux-pro-max-skill
  Leonxlnx/taste-skill
)

for skill in "${skills[@]}"; do
  echo "adding $skill"
  npx -y skills add "$skill" || echo "skipped $skill"
done
