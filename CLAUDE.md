# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Foundry VTT module for **Chroniques Oubliées Fantasy 2nd Edition** (COF2) - specifically the "Livre des règles" (rulebook). It's designed for the `co2` system and contains game content including items, actors, journal entries, macros, and roll tables.

**Key Details:**
- **Platform**: Foundry VTT v13
- **Language**: French (primary audience)
- **System**: Requires the `co2` system
- **License**: GPL-3.0 for code; content is © Black Book Éditions

## Development Commands

### Build & Compilation

```bash
# Compile LESS to CSS
gulp css

# Watch for LESS changes and auto-compile
gulp  # runs default task (css + watch)

# Convert compiled packs (LDB) to YAML source files
npm run LDBtoYML

# Convert YAML source files to compiled packs (LDB)
npm run YMLtoLDB
```

### Dependencies

```bash
# Install dependencies (recommended for CI)
npm ci

# Install dependencies (local development)
npm install
```

## Code Architecture

### Pack Management Workflow

This module uses a **bidirectional pack conversion system** between source files and compiled packs:

1. **Source files** (`src/packs/`) contain YAML files - human-readable, git-friendly format
2. **Compiled packs** (`packs/`) contain LDB files - Foundry's native NeDB database format
3. **Tools**:
   - `tools/LDBtoYML.mjs` - Extracts compiled packs to YAML (uses `@foundryvtt/foundryvtt-cli`)
   - `tools/YMLtoLDB.mjs` - Compiles YAML sources to LDB packs (uses `@foundryvtt/foundryvtt-cli`)

**Important**:
- Edit content in `src/packs/` YAML files, not directly in `packs/` LDB files
- Run `npm run YMLtoLDB` after editing YAML files to rebuild packs
- Run `npm run LDBtoYML` to extract changes from compiled packs back to YAML

### Module Entry Point

`cof-base.mjs` is the main module file that:
- Registers Foundry hooks (`init`, `ready`, `renderJournalEntrySheet`, `renderCOSidebarMenu`)
- Populates system constants for martial trainings (weapons, armors, shields)
- Applies custom CSS class to COF journals
- Adds sidebar menu template

### Styling

- **Source**: LESS files in `style/` directory
- **Main file**: `style/cof-base.less`
- **Output**: `cof-base.css` (compiled, included in module)
- **Compilation**: Uses gulp + gulp-less
- **Preprocessor**: LESS (not SASS/SCSS)
- **Key files**:
  - `style/cof-base.less` - Main entry point
  - `style/global.less` - Global styles
  - `style/journal.less` - Journal-specific styles
  - `style/polices.less` - Font definitions

### Pack Types

The module defines 6 pack types (see `module.json`):

1. **cof-2-guide-du-systeme** - System guide (JournalEntry)
2. **cof-2-base-regles** - Rule book (JournalEntry)
3. **cof-2-base-items** - Items/capacities/equipment (Item)
4. **cof-2-base-encounters** - Bestiary and pre-generated characters (Actor)
5. **cof-2-tables-aleatoires** - Random tables (RollTable)
6. **cof-2-macros** - Macros (Macro)

### Guide Update System

The `guide/update-guide.mjs` script updates system guide pages from HTML files:
- Maps HTML files in `guide/html/` to journal page IDs
- Fetches HTML content and updates corresponding journal pages in the `cof-2-guide-du-systeme` compendium
- Must be run from within Foundry VTT (uses `game` global)

## Coding Standards

### JavaScript
- ES6+ modules (import/export, arrow functions, async/await)
- Naming: `camelCase` for variables/functions, `PascalCase` for classes
- Validate user inputs, avoid direct `innerHTML`
- Use JSDoc for exported modules
- Prefer lazy loading, destructuring, spread operator

### HTML
- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Accessibility: `alt` attributes, `aria-*` when needed, WCAG AA contrast
- SEO: proper `<title>`, `<meta>`, ordered heading tags

### CSS/LESS
- Methodology: CSS Modules
- Mobile-first responsive design (`min-width` media queries)
- Prefer Flexbox & Grid for layouts
- CSS variables in `:root` for colors, spacing, typography
- LESS for mixins, functions, imports

### Formatting
- Prettier config: no semicolons, 180 char print width
- ESLint integration enabled

### Don't Use
- Inline styles in HTML
- Global variables (non-encapsulated)
- jQuery for simple DOM manipulation (use vanilla JS)

## Release Workflow

The GitHub Actions workflow (`.github/workflows/main.yaml`) automates releases:

1. Triggers on GitHub release publication
2. Extracts version from git tag (format: `v<major>.<minor>.<patch>` or `<major>.<minor>.<patch>`)
3. Updates `module.json` with version and URLs
4. Runs `npm ci` to install dependencies
5. Runs `npm run YMLtoLDB` to build packs from YAML sources
6. Creates `module.zip` with required files
7. Uploads `module.json` and `module.zip` to GitHub release
8. Notifies Foundry VTT package API of new release

**Files included in release archive**:
- `module.json`, `cof-base.mjs`, `cof-base.css`
- `README.md`, `CHANGELOG.md`
- `assets/`, `fonts/`, `lang/`, `templates/`, `packs/`

## Important Notes

- **Language**: All content, documentation, and UI strings are in French
- **System dependency**: This module requires the `co2` system to be installed
- **Content ownership**: Text and images are proprietary to Black Book Éditions
- **Pack editing**: Always edit YAML files in `src/packs/`, never directly edit LDB files in `packs/`
- **Build before release**: CI automatically builds packs, but for local testing run `npm run YMLtoLDB` after YAML changes
