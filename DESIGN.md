---
name: Obsidian Precision
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies high-craft digital engineering: disciplined, hyper-focused, and quietly commanding. Designed for elite software engineers, technical founders, and systems architects, the aesthetic mirrors the tactile precision of tools like Linear, Raycast, and Vercel. 

### Visual Archetype & Mood
The visual grammar merges **Technical Minimalism** with **Subtle Luminescence**:
- **Void & Canvas:** High-density dark canvases create an immersive, low-strain surface that directs focus exclusively to technical output, code architecture, and high-impact case studies.
- **Micro-Luminescence:** Accent colors appear sparingly—not as broad surface fills, but as precision signals, laser guides, ambient radial diffusions, and focused state indicators.
- **Engineered Restraint:** Avoid gratuitous decoration. Visual interest stems from structural alignments, crisp monospace metadata, hairline borders, and deliberate typographic rhythm.

## Colors

The palette leverages pure low-light value hierarchies to maintain contrast ratios compliant with WCAG AAA for key editorial reading experiences.

### Palette Architecture
- **Canvas Base (`#0A0A0B`):** The foundational void. Absorbs eye fatigue and recedes.
- **Surface Elevation (`#111113`):** Elevated card tiers, modular containers, and floating panels.
- **Surface Highlight (`#18181B`):** Raised states, active items, and hovered card treatments.
- **Structural Lines (`#27272A`):** 1px structural boundaries defining the modular grid.
- **Primary Text (`#F5F5F5`):** High-readability pure contrast for headlines, metrics, and primary narrative.
- **Muted Secondary Text (`#A1A1AA`):** Medium-frequency gray for metadata, descriptions, and supporting prose.
- **Tertiary Text / Dim (`#71717A`):** Low-frequency indicators, terminal prompts, and inactive properties.
- **Primary Accent (`#6366F1` - Electric Indigo):** Actionable triggers, active commit lines, progress highlights, and focused glow conduits.
- **Secondary Accent (`#10B981` - Mint Emerald):** Production status, positive telemetry, deployment indicators, and live session nodes.

### Application Rules
- Accent fills must never occupy more than 5% of viewport surface area.
- Use primary accent glows via ultra-soft radial masks (`backdrop-filter` paired with `radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)`) behind hero showcases and milestone cards.
- Border accents on interactive cards should remain translucent (`rgba(99,102,241,0.3)`) on hover rather than solid strokes.

## Typography

Typographic scale is constructed with an obsession over vertical alignment, variable weight legibility, and technical density.

### Hierarchy & Pairing
- **Primary Narrative (Geist):** Handles all headlines, body copy, and UI actions. Tighter negative letter-spacing (`-0.01em` to `-0.03em`) on larger scales delivers that hallmark modern developer-tool punch without sacrificing clarity.
- **Technical Signals (JetBrains Mono):** Reserved for technical metadata, commit hashes, system tags, timestamps, code snippets, and metric counters. It grounds the UI in engineering discipline.

### Handling Long-Form Reading
Case study prose and technical write-ups should cap max text widths at `68ch` to sustain reader velocity. Use `body-lg` with open `26px` line-heights to contrast against the tight information architecture of sidebar panels.

## Layout & Spacing

The layout model implements a structured 12-column grid anchored inside a maximum container width of `1200px` for portfolio showcases, with an alternative full-width `max-w-7xl` dashboard mode for interactive sandboxes.

### Responsive Breakpoints
- **Mobile (< 768px):** 4-column layout. Margin collapses to `1.25rem` (`margin-mobile`), gutter shrinks to `1rem` (`gutter-mobile`). Multi-column grids (like project side-by-sides) collapse to clean linear stacks.
- **Tablet (768px – 1024px):** 8-column layout. Margins scale to `2rem`. Complex toolbars collapse into segmented icon ribbons.
- **Desktop (1024px+):** 12-column layout. Margins expand to `3rem` (`margin`). Side rails, filter docks, and project previews occupy balanced 4/8 or 3/9 column splits.

### Spacing Philosophy
Consistent rhythm requires utilizing `space-xs` (4px) and `space-sm` (8px) for internal component encapsulation (e.g., inside badges, icon buttons, command line rows), reserving `space-lg` (24px) and `space-xl` (40px) for layout modularity.

## Elevation & Depth

Depth in this system is created through **Tonal Stacking**, **Hairline Glassmorphism**, and **Spectral Luminescence** rather than traditional heavy drop shadows.

### Surface Tiers
- **Base Layer (Elevation 0):** `#0A0A0B` - The canvas.
- **Card Surface (Elevation 1):** `#111113` with a solid or translucent border of `1px solid #27272A`.
- **Floating Modal / Popover (Elevation 2):** `rgba(17, 17, 19, 0.85)` with `backdrop-filter: blur(12px)` and a subtle interior highlight edge (`inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`).

### Ambient Glow & Shadows
- **Card Hover:** Subtle indigo bloom: `box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.35), 0 8px 24px -4px rgba(99, 102, 241, 0.12)`.
- **Status Dot Pulse:** Mint green glow: `box-shadow: 0 0 8px 1px rgba(16, 185, 129, 0.4)`.
- **Strict Prohibition:** Never use high-opacity black shadows (e.g., `rgba(0,0,0,0.8)` with large blur), which muddy dark UI surfaces.

## Shapes

The design uses a **Soft (Level 1)** geometric discipline. Radii are intentional, compact, and engineered:

- **Base Radius (`0.25rem` / 4px):** Interactive chips, micro-badges, code blocks, and inline inputs.
- **Medium Radius (`0.5rem` / 8px):** Standard buttons, text inputs, dropdown menus, and nested project widgets.
- **Large Radius (`0.75rem` / 12px):** Project cards, bento grids, modal dialogs, and terminal frames.

Avoid oversized pill shapes except for floating status badges (`Available for roles`, `v2.4.0`) to keep the interface looking like precision engineering rather than a consumer social app.

## Components

### Buttons
- **Primary Button:** Background `#F5F5F5`, text `#0A0A0B`, `font-medium`, 8px radius. On hover, background shifts to `#FFFFFF` with a subtle white halo: `box-shadow: 0 0 16px rgba(255, 255, 255, 0.2)`.
- **Secondary Button:** Background `transparent`, border `1px solid #27272A`, text `#F5F5F5`. On hover, background fills to `#18181B` and border lightens to `#3F3F46`.
- **Accent Action:** Background `#6366F1`, text `#FFFFFF`. Hover triggers an upward 1px translate and intensified indigo bloom.

### Badges & Chips
- **Monospace Stack Badges:** Height 24px, padding `0 8px`, JetBrains Mono (`label-badge`), radius 4px.
- **Neutral Tag:** Background `#18181B`, border `1px solid #27272A`, text `#A1A1AA`.
- **Live Status Tag:** Background `rgba(16, 185, 129, 0.08)`, border `1px solid rgba(16, 185, 129, 0.25)`, text `#10B981`. Includes a pulsing 6px circular dot on the leading edge.

### Cards & Bento Grid Cells
- **Structure:** Surface `#111113`, `1px solid #27272A`, radius 12px, padding `space-lg`.
- **Micro-Interaction:** Hover introduces an inner border gradient transition to `rgba(99, 102, 241, 0.4)` and a slight background highlight elevation to `#141416`.
- **Header Structure:** Title in `headline-sm`, metadata paired immediately on the right in JetBrains Mono (`label-code`) in `#71717A`.

### Input Fields & Command Palettes
- **Text Field:** Height 40px, background `#0A0A0B`, border `1px solid #27272A`, text `#F5F5F5`, radius 8px, placeholder `#71717A`. 
- **Focus State:** Border shifts directly to `#6366F1`, accompanied by an outline ring `0 0 0 1px #6366F1`.
- **Command Palette (Raycast-Style):** Modal container floating centered, width 640px max, frosted glass `#111113` with `backdrop-filter: blur(20px)`, top keyboard input with bottom shortcut indicators in monospace pill containers (`K`, `ESC`, `↵`).

### Interactive Code Previews
- **Window Chrome:** Header bar containing three 10px neutral traffic light dots (`#27272A`), active file tab styled with an active top border in `#6366F1`.
- **Code Body:** JetBrains Mono, `#F5F5F5`, line numbers set in `#71717A` with a right margin of `1rem`.