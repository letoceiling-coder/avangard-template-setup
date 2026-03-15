

# AI Gateway Platform — Implementation Plan

## Overview
A premium dark-themed AI platform control center with 12+ major modules. Built with React, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. No backend logic — pure UI architecture with realistic configuration panels.

## Design System
- **Surface:** Zinc-950 (`#09090b`) background, Zinc-900 (`#18181b`) cards
- **Depth:** Glassmorphism panels with `backdrop-blur-xl`, layered shadows instead of borders
- **Radius:** 12px outer, 8px inner
- **Typography:** Geist Sans, `tabular-nums` for metrics, Zinc-400/Zinc-100 text hierarchy
- **Accents:** Blue-500 for active states, subtle white/5 borders
- **Motion:** Framer Motion with 200ms cubic-bezier transitions

## Global Layout
- **Sidebar Navigation** (`w-64` expanded / `w-16` collapsed) with backdrop blur, vertical blue accent on active route
- **Navigation Groups:**
  - Core: Dashboard, AI Studio, Media Studio
  - Creation: Voice Studio, Data Analysis
  - Orchestration: Agents, Tools, Datasets
  - Infrastructure: API Keys, Usage & Billing, API Tokens, Storage, Logs, Monitoring
  - Pro: AI Gateway Pro
- **Header** with sidebar trigger, breadcrumbs, and global search

## Pages & Features

### 1. Dashboard
- Overview cards: Total requests, active models, token usage, costs
- Recharts area chart for latency/usage trends
- Recent activity feed
- Quick-access cards to AI Studio, Media Studio, Agents

### 2. AI Studio (Chat Workspace)
- **Three-column layout:**
  - Left (280px): Conversation history list with search
  - Center (flexible): Chat canvas with streaming message display, floating input bar at bottom with Upload, Voice, Camera, Model Selector actions
  - Right (320px): Model config panel — Temperature, Max Tokens, Top P, Presence/Frequency Penalty sliders, System Prompt textarea, Model selector dropdown (OpenAI/Gemini/Claude)

### 3. Media Studio (Tabbed Workspace)
- **Image Generation Tab:** Prompt field, advanced controls (size, style, guidance scale, seed, steps, negative prompt), provider/model selectors (Flux, SDXL, SD3, Playground v2), responsive image gallery grid
- **Video Generation Tab:** Prompt, duration/resolution/style/camera motion controls, provider selector (Runway/Pika/Luma), video preview player with generation status
- **Animate Photo Tab:** Image upload zone, animation options (face animation, camera movement, talking avatar), output video preview
- **Audio Generation Tab:** Text input, voice/style controls, audio player preview

### 4. Voice Studio
- Text-to-Speech: text input, voice selector, speed/pitch controls, audio player
- Speech-to-Text: audio upload/record, transcription output
- Voice Cloning: sample upload, clone configuration
- Provider: ElevenLabs branding throughout

### 5. Data Analysis
- CSV/Excel file upload zone
- AI-powered chart generation with prompt
- Visualization outputs: line, bar, pie charts (Recharts), interactive maps placeholder
- Data table preview with sorting/filtering

### 6. AI Tool Router
- Configuration table: Tool Name | Primary Provider | Fallback Model | Latency Threshold
- Tools: image_generation, video_generation, voice_generation, document_analysis, vision_analysis
- Traffic light status indicators per provider
- Edit mode for routing rules

### 7. AI Agents Engine
- Agent cards grid: Avatar, Name, Status badge (Idle/Active), capability badges (Vision, Browsing, Code)
- Agent builder dialog: name, system prompt textarea, tools multiselect, memory toggle switch
- Pre-built templates: Marketing Agent, Video Creator, Research Agent

### 8. API Keys Management
- Grouped key sections (AI Models, Media, Infrastructure, Payments, Monitoring)
- Masked inputs with reveal toggle, copy-to-clipboard with toast
- Status indicators (configured/not configured)

### 9. Usage & Billing
- Token usage charts (per model, per provider, daily trends)
- Cost breakdown table
- Billing plan card with Stripe integration UI

### 10. API Tokens
- Token list table with create/revoke actions
- Permission checkboxes (chat, image generation, video generation)
- Token creation dialog with name and scope selection

### 11. Storage Manager
- Folder tabs: Images, Videos, Audio
- File grid with thumbnails, preview modal, download button
- Upload zone, storage usage indicator

### 12. Monitoring
- Model latency area charts
- Error rate indicators
- API usage metrics
- Queue jobs table
- Sentry integration status card

### 13. AI Gateway Pro
- Visual pipeline diagram: User Input → Router → Agent → Media Pipeline → Model Provider → Output
- Framer Motion animated flow with pulse on active nodes
- Routing rules editor

### 14. Logs, Datasets, Models, Marketplace, Settings
- Logs: High-density mono table with filters
- Datasets: Upload and manage training data
- Models: Browse available models with provider grouping
- Marketplace: Community tools/agents grid
- Settings: Profile, theme, notifications, workspace config

## Technical Approach
- ~15 route pages with React Router
- Shared layout component with sidebar + header
- Framer Motion for page transitions, hover states, panel animations
- All UI-only — no real API calls, realistic mock configurations
- Responsive with mobile hamburger menu, desktop-priority design

