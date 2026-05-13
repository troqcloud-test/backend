# Contributing to TroqCloud Test Apps

## What are these apps?

Each repository in this collection is a minimal, runnable application demonstrating how to deploy a specific framework or language on [TroqCloud](https://troqcloud.com) — a platform where real infrastructure is provisioned the moment you subscribe and deploy.

## Why TroqCloud has no free trial

TroqCloud runs on real dedicated servers, and real servers cost money. When you deploy, a server is provisioned for you. You pay for what you actually run — nothing more. There is no shared "free tier" pool, and there is no free trial period.

This keeps the platform financially sustainable and ensures every user gets dedicated compute, not a slow shared instance throttled by other people's workloads. The moment you subscribe and deploy, your server starts. The moment you take it down, billing stops.

**If you want to try TroqCloud: subscribe, deploy one of these test apps, and see it live on your own infrastructure.**

## Why these test apps exist

They give you a working, deployable starting point in your language or framework of choice. Clone one, follow the README, and you have a live service in minutes. They also serve as a shared reference for the community — a place to find and share working examples across every stack.

## How to contribute

We welcome contributions from anyone building real applications. Good contributions look like:

- **New API patterns** — REST, GraphQL, WebSockets, SSE, gRPC
- **Real integrations** — databases, object storage, queues, caches, email, auth, file uploads
- **Practical use cases** — job schedulers, background workers, file processors, webhooks, admin APIs

If you have a working application in the same language/framework as this repo and want to share it with the community, this is the place.

### Steps

1. **Fork** this repository
2. **Modify or extend** the application — add endpoints, integrations, or rework it around a new use case. Keep it runnable and self-contained.
3. **Test it locally** — confirm it builds and runs correctly before opening a PR
4. **Open a pull request** with a clear title and description explaining what you changed and why it's useful to other developers

### What happens after you open a PR

1. We review the code and test it ourselves on real infrastructure
2. If it works and adds value for other developers, we merge it
3. We'll notify you when the change is live
4. You can then deploy the updated app on TroqCloud with your subscription — real hardware, no sharing, no throttling

### Rules

- **The app must run out of the box** — if it requires environment variables or external services, document them clearly in the README
- **No CI/CD workflows** — do not add `.github/workflows`, `.gitlab-ci.yml`, or any other pipeline config; these repos do not use automated pipelines
- **Do not modify `troq.toml`** or the build/start commands without discussing it in an issue first — these are what the platform uses to deploy the app
- **One clear purpose per PR** — don't mix unrelated changes
- **Proposing a new app type or major restructure?** Open an issue first so we can discuss fit before you invest time building it
- **No breaking changes** — existing deployment instructions must continue to work after your PR

## Questions & Community

Open an issue in this repository, visit [troqcloud.com](https://troqcloud.com), or follow the project on X for updates, deployment tips, and announcements: [@isaa_coach](https://x.com/isaa_coach).