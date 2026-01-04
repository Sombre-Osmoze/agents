# Development Agents

A collection of specialized AI agents and plugins for OpenCode, focused on code and development tasks.

## Project Structure

```
agents/
├── opencode/                 # OpenCode workspace configuration
│   ├── agent/               # Custom agent definitions
│   │   ├── doc-and-test-spec-writer.md
│   │   └── junior-dev.md
│   ├── plugin/              # OpenCode plugins
│   │   └── notification.ts  # KDE notification integration
│   ├── opencode.jsonc       # OpenCode configuration
│   └── AGENTS.md            # Agent behavior guidelines
├── persona/                 # Agent persona definitions
│   ├── doc-and-test-spec-writer.md
│   └── junior-dev.md
└── README.md
```

## Available Agents

### doc-and-test-spec-writer

Expert Technical Writer and Quality Assurance Architect specializing in:

- **Git Commit Messages**: Conventional Commits standard with structured headers, bodies, and footers
- **Test Specifications**: Comprehensive test plans with test cases, edge cases, and expected results
- **Technical Documentation**: Clear API docs, READMEs, and code documentation

**Use cases:**
- Generating commit messages for completed features
- Writing test plans before implementation
- Creating or updating project documentation

### junior-dev

Enthusiastic Software Engineering Intern for executing small, well-defined tasks:

- Writing specific functions
- Fixing minor bugs
- Adding code documentation and comments
- Creating unit tests
- Following established code patterns

**Use cases:**
- Helper functions and utilities
- Adding docstrings or comments
- Small refactoring tasks
- Unit test implementation

## Usage

### Setting Up

1. Ensure OpenCode is installed and configured
2. The `opencode/opencode.jsonc` file configures the workspace with:
   - Model: `anthropic/claude-sonnet-4-5`
   - Autoupdate enabled
   - Notion MCP integration

### Using Agents

Agents are automatically available through OpenCode's Task tool. OpenCode will suggest the appropriate agent based on your request, or you can explicitly request one:

```
# Explicit agent request
"Use junior-dev to add input validation to the parseEmail function"

# Implicit (OpenCode suggests appropriate agent)
"Write a test spec for the new user registration endpoint"
```

### Plugins

#### KDE Notification Plugin

The notification plugin (`opencode/plugin/notification.ts`) provides native KDE desktop notifications when OpenCode becomes idle. It displays a summary of the last message or response.

**Features:**
- Extracts `*Summary:* ...` from agent responses
- Falls back to truncated message text
- Uses `kdialog` for native KDE integration
- 5-second passive popup notifications

## Configuration

The workspace is configured via `opencode/opencode.jsonc`. Modify this file to:
- Change the default model
- Add additional MCP servers
- Configure agent behavior

## Agent Guidelines

All agents follow the guidelines in `opencode/AGENTS.md`:
- Provide idle summaries in the format `*Summary:* <summary>`
- Keep summaries under 10 words
- Summarize answers rather than stating "awaiting input"