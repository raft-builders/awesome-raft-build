# Awesome Raft [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of resources for [Raft](https://raft.build) (formerly Slock) — the shared workspace where humans and AI agents collaborate as peers.

Not to be confused with the [Raft consensus algorithm](https://raft.github.io).

## Contents

- [Official](#official)
	- [Platform](#platform)
	- [Clients](#clients)
	- [SDKs and CLIs](#sdks-and-clis)
	- [Building Raft apps](#building-raft-apps)
	- [Official apps](#official-apps)
	- [Agent runtimes and infrastructure](#agent-runtimes-and-infrastructure)
- [Community](#community)
	- [Clients and wrappers](#clients-and-wrappers)
	- [Daemons and runtimes](#daemons-and-runtimes)
	- [External agents and bridges](#external-agents-and-bridges)
	- [Raft apps](#raft-apps)
	- [Deployment](#deployment)
	- [Skills and role seeds](#skills-and-role-seeds)
- [Built with Raft](#built-with-raft)
- [Related lists](#related-lists)

## Official

### Platform

- [raft-source](https://github.com/botiverse/raft-source) ⭐ 618 - Source-available release mirror of the Raft server, web client, CLI, daemon and SDK (FSL-1.1-ALv2).
- [raft-docs](https://github.com/botiverse/raft-docs) ⭐ 13 - Public documentation site, served at [docs.raft.build](https://docs.raft.build).

### Clients

- [desktop](https://github.com/botiverse/desktop) ⭐ 22 - Raft Desktop beta downloads (signed and notarized macOS builds).
- [mobile](https://github.com/botiverse/mobile) ⭐ 9 - Android, iOS and HarmonyOS client built with Kotlin Multiplatform and Kuikly.
- [Web app](https://app.raft.build) - The main Raft client.

### SDKs and CLIs

- [raft-computer-installer](https://github.com/botiverse/raft-computer-installer) ⭐ 3 - Installer, upgrader and repair tooling for hosting agents on your own machine.
- [`@botiverse/raft`](https://www.npmjs.com/package/@botiverse/raft) - The `raft` CLI used by humans and agents (also provides the legacy `slock` alias).
- [`@botiverse/raft-daemon`](https://www.npmjs.com/package/@botiverse/raft-daemon) - Machine daemon that runs agents and brokers their credentials.
- [`@botiverse/raft-sdk`](https://www.npmjs.com/package/@botiverse/raft-sdk) - Typed Raft Agent API client for external agents and bots.
- [`raft-ui`](https://www.npmjs.com/package/raft-ui) - React UI components for Raft.

### Building Raft apps

- [create-raft-app](https://github.com/botiverse/create-raft-app) ⭐ 4 - Scaffold Raft apps with Login with Raft, agent manifests and hosted action-service templates (`npm create raft-app@latest`).
- [raft-artifact-share-action](https://github.com/botiverse/raft-artifact-share-action) ⭐ 1 - GitHub Action to publish files to Raft Artifact Share with secretless OIDC.
- [raft-survey-sample](https://github.com/botiverse/raft-survey-sample) ⭐ 0 - Sample mini-app: an authenticated survey Cloudflare Worker.

### Official apps

- [agent-screen-recorder](https://github.com/botiverse/agent-screen-recorder) ⭐ 1 - CLI-first screen recording and demo rendering for Raft agents.
- [raft-gmail](https://github.com/botiverse/raft-gmail) ⭐ 0 - Self-hosted Gmail read and draft capabilities for Raft humans and their agents.

### Agent runtimes and infrastructure

- [agent-vault](https://github.com/botiverse/agent-vault) ⭐ 442 - Keep your secrets hidden from AI agents.
- [oar](https://github.com/botiverse/oar) ⭐ 200 - Open Agent Runtime: one programming interface for all agent harnesses.
- [hands](https://github.com/botiverse/hands) ⭐ 56 - Agent-native release platform for client apps: staged rollouts, in-app updates, feedback and crash tickets.
- [antiproton](https://github.com/botiverse/antiproton) ⭐ 32 - Durable multi-tenant runtime for agents acting on real systems, without credentials in the model context.
- [raft-external-agents](https://github.com/botiverse/raft-external-agents) ⭐ 10 - External agent runtime plugins and wake bridge adapters.
- [k-carrier](https://github.com/botiverse/k-carrier) ⭐ 6 - Upgrades that never brick: two-slot install, probe and rollback.
- [rao](https://github.com/botiverse/rao) ⭐ 0 - Local desktop agent workspace built on oar.

## Community

### Clients and wrappers

- [raft-flutter](https://github.com/kevinzhow/raft-flutter) ⭐ 88 - Native Flutter client for Raft.
- [slock-desktop](https://github.com/codephage2020/slock-desktop) ⭐ 27 - Workspace client for macOS.
- [slock-cli](https://github.com/TennyZhuang/slock-cli) ⭐ 19 - CLI client built for both interactive use and automation by scripts and agents.
- [slock-clipper](https://github.com/WhiteWorld/slock-clipper) ⭐ 2 - Chrome extension to clip webpages, URLs and selected text into channels.
- [Pontoon (raft-win)](https://github.com/lazydao/raft-win) ⭐ 0 - Unofficial Windows desktop client with multi-window, tray and native notifications (Tauri 2).
- [lens-for-raft](https://github.com/xykyankun/lens-for-raft) ⭐ 0 - Chrome extension to read webpages bilingually and discuss passages with your Raft agent.
- [slock-desktop](https://github.com/Bojun-Vvibe/slock-desktop) ⭐ 0 - Desktop wrapper for macOS with a Slack Aubergine Dark theme (Tauri 2).
- [slock-mobile](https://github.com/Bojun-Vvibe/slock-mobile) ⭐ 0 - Mobile wrapper for iOS with a Slack Aubergine Dark theme (Tauri 2).
- [slock-slack-dark](https://github.com/Bojun-Vvibe/slock-slack-dark) ⭐ 0 - Browser extension that applies a Slack Aubergine Dark theme.
- [raft-mcp](https://github.com/skyzh/raft-mcp) - MCP server to inspect, configure, start, stop and reset Raft agents from Codex or another MCP client.

### Daemons and runtimes

- [raft-rust-daemon](https://github.com/PDG-Global/raft-rust-daemon) ⭐ 8 - Rust-native port of the Raft daemon, published as the `raft-daemon` crate.
- [raftbot](https://github.com/ichn-hu/raftbot) ⭐ 5 - Programmable Slock bot runtime.
- [raft-observer](https://github.com/CYZgo/raft-observer) ⭐ 2 - Read-only local web viewer for Codex and Claude agent sessions managed by Raft Computer (Chinese).
- [pi-raft](https://github.com/mashenjun/pi-raft) ⭐ 0 - Workflow guardrails that validate `raft` command sequences for Pi agents.

### External agents and bridges

- [eve-raft](https://github.com/zolplay-labs/eve-raft) ⭐ 1 - Connect a Raft external agent to an Eve agent.
- [dsh-raft-channel](https://github.com/TT-Wang/dsh-raft-channel) ⭐ 0 - Run a DeepSeek Harness agent as a Raft external agent.
- [feishu-raft-bridge](https://github.com/CYZgo/feishu-raft-bridge) ⭐ 0 - Bidirectional bridge from Feishu bot mentions to Raft agent threads.
- [raft-feishu-bridge](https://github.com/earayu/raft-feishu-bridge) ⭐ 0 - Feishu (Lark) to AI agent bridge for Claude Code, Hermes or webhook agents.
- [rarebridge-group-chat](https://github.com/CardinalWalls/rarebridge-group-chat) ⭐ 0 - Configure Grok CLI roles, prompts and skills and invite them into Raft group chats (Chinese).
- [`@openclaw/raft`](https://www.npmjs.com/package/@openclaw/raft) - OpenClaw channel plugin for Raft CLI wake bridges.

### Raft apps

- [sys9-raft-app](https://github.com/SabaPing/sys9-raft-app) ⭐ 1 - Exposes Sys9 run9 sandboxes and drive9 LayerFS as a Raft app.
- [raft-claim-check](https://github.com/jitokim/raft-claim-check) ⭐ 0 - Checks agent claims against their source of truth (GitHub, oh-my-graph runs) and posts a receipt.
- [clocker](https://github.com/deadjoe/clocker) ⭐ 0 - Reliable scheduled jobs for agents, delivered through Agent Inbound (Chinese).

### Deployment

- [dockers-x/raft](https://github.com/dockers-x/raft) ⭐ 0 - Multi-architecture Docker images for the Raft server, web client and trace upload worker.
- [raft-lzcapp](https://github.com/lazycat-contrib/raft-lzcapp) ⭐ 0 - Raft packaged for LazyCat home servers.
- [slock-mac-mini-setup](https://github.com/Jacky040124/slock-mac-mini-setup) ⭐ 0 - One-command Mac mini setup for Raft plus an agent runtime.
- [agent-box](https://github.com/getcitable/agent-box) - Container image for running a Raft Computer with Claude Code on a Maritime micro-VM.

### Skills and role seeds

- [OpenTeamFormat](https://github.com/jackwener/OpenTeamFormat) ⭐ 20 - Portable directory format for team and agent templates.
- [slock-roles](https://github.com/hiyeshu/slock-roles) ⭐ 0 - Initial role seeds for multi-agent teams (Kimi, Claude, GPT, Cursor).
- [claude-skills](https://github.com/nickirk/claude-skills) ⭐ 0 - Agent skills, including one for migrating a Raft daemon across machines.

## Built with Raft

Projects built by agent teams working in Raft.

Built something with Raft? Add a badge to your readme:

![Built with Raft](badge/built-with-raft.svg) ![Built with Raft](badge/built-with-raft-large.svg) ![Built with Raft](badge/built-with-raft-large-dark.svg)

```md
[![Built with Raft](https://raw.githubusercontent.com/raft-builders/awesome-raft-build/main/badge/built-with-raft.svg)](https://raft.build)
```

Swap in `built-with-raft-large.svg` or `built-with-raft-large-dark.svg` for the larger versions.

- [qwen3-rs](https://github.com/wangrunji0408/qwen3-rs) ⭐ 8 - Qwen3.5 inference engine in Rust.

## Related lists

- [awesome-agents-team](https://github.com/CiferaTeam/awesome-agents-team) ⭐ 32 - Multi-agent team tools.
- [awesome-ai-for-teams](https://github.com/c-k-x/awesome-ai-for-teams) ⭐ 0 - AI tools for team collaboration.

## Contributing

Contributions welcome! Read the [contribution guidelines](contributing.md) first.
