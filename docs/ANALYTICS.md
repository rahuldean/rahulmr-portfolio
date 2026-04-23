# Analytics

This site uses [Umami](https://umami.is) - self-hosted, cookieless, privacy-friendly. No GA, no Plausible, no Posthog.

## Event vocabulary

All event names are lowercase-kebab. Keep the list small and consistent.

### Project interactions
| Event | Data |
|-------|------|
| `project-github-click` | `{ project: "<id>" }` |
| `project-demo-click` | `{ project: "<id>" }` |
| `project-website-click` | `{ project: "<id>" }` |

### Writing
| Event | Data |
|-------|------|
| `blog-post-click` | `{ slug: "<slug>", source: "home" \| "blog-index" \| "related" }` |
| `blog-scroll-complete` | `{ slug: "<slug>" }` - fires once at 90% scroll depth |
| `gist-click` | `{ slug: "<uid>" }` |

### Connect / conversion
| Event | Data |
|-------|------|
| `contact-email-click` | - |
| `contact-email-copy` | - |
| `social-github-click` | - |
| `social-linkedin-click` | - |

### Navigation
| Event | Data |
|-------|------|
| `earlier-work-expand` | - fires when the collapsed "Earlier work" section is opened |

## UTM conventions

Use UTM params on outbound share links, not on the site itself.

| Source | Pattern |
|--------|---------|
| LinkedIn post | `?utm_source=linkedin&utm_medium=social&utm_campaign=<post-slug>` |
| Hacker News | `?utm_source=hn&utm_medium=social` |
| Newsletter / cross-post | `?utm_source=<publication>&utm_medium=referral` |

## Outbound link attribution

Outbound project links append `?src=rahulmx.com&path=/#projects` so destination sites see the referral source. This is separate from Umami events - both run together.

## Recommended Umami dashboard views

1. **Top blog posts** - pageviews by `/blog/*` path, weekly and 30-day
2. **Scroll completion rate** - `blog-scroll-complete` events ÷ pageviews per slug
3. **Project engagement funnel** - pageviews → `project-*-click` events
4. **Contact intent** - `contact-email-click` + `contact-email-copy` + `social-linkedin-click` over time
5. **Traffic source breakdown** - referrer + UTM
