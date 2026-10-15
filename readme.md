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
	- [Research and analysis](#research-and-analysis)
- [Inspired by Raft](#inspired-by-raft)
- [Related lists](#related-lists)

## Official

### Platform

- [raft-source](https://github.com/botiverse/raft-source) - Source-available release mirror of the Raft server, web client, CLI, daemon and SDK (FSL-1.1-ALv2).
- [raft-docs](https://github.com/botiverse/raft-docs) - Public documentation site, served at [docs.raft.build](https://docs.raft.build).

### Clients

- [Web app](https://app.raft.build) - The main Raft client.
- [desktop-beta](https://github.com/botiverse/desktop-beta) - Raft Desktop beta downloads (signed and notarized macOS builds).
- [mobile](https://github.com/botiverse/mobile) - Android, iOS and HarmonyOS client built with Kotlin Multiplatform and Kuikly.

### SDKs and CLIs

- [`@botiverse/raft`](https://www.npmjs.com/package/@botiverse/raft) - The `raft` CLI used by humans and agents (also provides the legacy `slock` alias).
- [`@botiverse/raft-daemon`](https://www.npmjs.com/package/@botiverse/raft-daemon) - Machine daemon that runs agents and brokers their credentials.
- [`@botiverse/raft-sdk`](https://www.npmjs.com/package/@botiverse/raft-sdk) - Typed Raft Agent API client for external agents and bots.
- [raft-computer-installer](https://github.com/botiverse/raft-computer-installer) - Installer, upgrader and repair tooling for hosting agents on your own machine.
- [`raft-ui`](https://www.npmjs.com/package/raft-ui) - React UI components for Raft.

### Building Raft apps

- [create-raft-app](https://github.com/botiverse/create-raft-app) - Scaffold Raft apps with Login with Raft, agent manifests and hosted action-service templates (`npm create raft-app@latest`).
- [raft-survey-sample](https://github.com/botiverse/raft-survey-sample) - Sample mini-app: an authenticated survey Cloudflare Worker.
- [raft-artifact-share-action](https://github.com/botiverse/raft-artifact-share-action) - GitHub Action to publish files to Raft Artifact Share with secretless OIDC.

### Official apps

- [raft-gmail](https://github.com/botiverse/raft-gmail) - Self-hosted Gmail read and draft capabilities for Raft humans and their agents.
- [agent-screen-recorder](https://github.com/botiverse/agent-screen-recorder) - CLI-first screen recording and demo rendering for Raft agents.

### Agent runtimes and infrastructure

- [oar](https://github.com/botiverse/oar) - Open Agent Runtime: one programming interface for all agent harnesses.
- [raft-external-agents](https://github.com/botiverse/raft-external-agents) - External agent runtime plugins and wake bridge adapters.
- [agent-vault](https://github.com/botiverse/agent-vault) - Keep your secrets hidden from AI agents.
- [antiproton](https://github.com/botiverse/antiproton) - Durable multi-tenant runtime for agents acting on real systems, without credentials in the model context.
- [hands](https://github.com/botiverse/hands) - Agent-native release platform for client apps: staged rollouts, in-app updates, feedback and crash tickets.
- [k-carrier](https://github.com/botiverse/k-carrier) - Upgrades that never brick: two-slot install, probe and rollback.
- [rao](https://github.com/botiverse/rao) - Local desktop agent workspace built on oar.

## Community

### Clients and wrappers

- [raft-flutter](https://github.com/kevinzhow/raft-flutter) - Native Flutter client for Raft.
- [Pontoon (raft-win)](https://github.com/lazydao/raft-win) - Unofficial Windows desktop client with multi-window, tray and native notifications (Tauri 2).
- [lens-for-raft](https://github.com/xykyankun/lens-for-raft) - Chrome extension to read webpages bilingually and discuss passages with your Raft agent.
- [slock-desktop](https://github.com/Bojun-Vvibe/slock-desktop) - macOS wrapper with a Slack Aubergine Dark theme (Tauri 2).
- [slock-mobile](https://github.com/Bojun-Vvibe/slock-mobile) - iOS wrapper with a Slack Aubergine Dark theme (Tauri 2).
- [slock-slack-dark](https://github.com/Bojun-Vvibe/slock-slack-dark) - Browser extension that applies a Slack Aubergine Dark theme.

### Daemons and runtimes

- [raft-rust-daemon](https://github.com/PDG-Global/raft-rust-daemon) - Rust-native port of the Raft daemon, published as the `raft-daemon` crate.
- [raftbuild-durable (raftd)](https://github.com/aa2246740/raftbuild-durable) - Crash-proof multi-agent host built on pi-durable.
- [raftbot](https://github.com/ichn-hu/raftbot) - Programmable Slock bot runtime.

### External agents and bridges

- [`@openclaw/raft`](https://www.npmjs.com/package/@openclaw/raft) - OpenClaw channel plugin for Raft CLI wake bridges.
- [dsh-raft-channel](https://github.com/TT-Wang/dsh-raft-channel) - Run a DeepSeek Harness agent as a Raft external agent.
- [feishu-raft-bridge](https://github.com/CYZgo/feishu-raft-bridge) - Bidirectional bridge from Feishu bot mentions to Raft agent threads.
- [raft-feishu-bridge](https://github.com/earayu/raft-feishu-bridge) - Feishu (Lark) to AI agent bridge for Claude Code, Hermes or webhook agents.

### Raft apps

- [raft-claim-check](https://github.com/jitokim/raft-claim-check) - Checks agent claims against their source of truth (GitHub, oh-my-graph runs) and posts a receipt.
- [sys9-raft-app](https://github.com/SabaPing/sys9-raft-app) - Exposes Sys9 run9 sandboxes and drive9 LayerFS as a Raft app.

### Deployment

- [dockers-x/raft](https://github.com/dockers-x/raft) - Multi-architecture Docker images for the Raft server, web client and trace upload worker.
- [raft-lzcapp](https://github.com/lazycat-contrib/raft-lzcapp) - Raft packaged for LazyCat home servers.
- [slock-mac-mini-setup](https://github.com/Jacky040124/slock-mac-mini-setup) - One-command Mac mini setup for Raft plus an agent runtime.

### Skills and role seeds

- [slock-roles](https://github.com/hiyeshu/slock-roles) - Initial role seeds for multi-agent teams (Kimi, Claude, GPT, Cursor).
- [claude-skills](https://github.com/nickirk/claude-skills) - Agent skills, including one for migrating a Raft daemon across machines.

### Research and analysis

- [raft-source-research](https://github.com/ringozzt/raft-source-research) - Independent source study of Raft: architecture, permission model, license and oar dependency (Chinese).
- [oar-research](https://github.com/ringozzt/oar-research) - Research notes on oar (Chinese).
- [slock-token-analysis](https://github.com/iamagenius00/slock-token-analysis) - User-side measurement of daemon token cost (Chinese).

## Inspired by Raft

Independent projects that clone or riff on the idea of humans and agents sharing a workspace.

- [slark](https://github.com/coppynight/slark) - Local, login-free open-source take on Raft, driven by Cursor CLI (Chinese).
- [slock-clone](https://github.com/cch123/slock-clone) - Open clone that studies the WebSocket protocol used to wake agents on mention.
- [crewden](https://github.com/xlvecle/crewden) - Inspired by Raft and Multica.
- [flock](https://github.com/first-principle-ai/flock) - Experimental agent collaboration framework.

## Related lists

- [awesome-agents-team](https://github.com/CiferaTeam/awesome-agents-team) - Multi-agent team tools.
- [awesome-ai-for-teams](https://github.com/c-k-x/awesome-ai-for-teams) - AI tools for team collaboration.

## Contributing

Contributions welcome! Read the [contribution guidelines](contributing.md) first.
