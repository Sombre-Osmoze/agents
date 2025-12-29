# Example: Basic Code Reviewer Setup

This example shows how to set up the code-reviewer agent in your repository.

## Setup Steps

1. **Create the agents directory in your repository:**
   ```bash
   mkdir -p .github/agents
   ```

2. **Copy the agent configuration:**
   ```bash
   cp agents/code-reviewer.md .github/agents/
   ```

3. **Customize for your project** (optional):
   Edit `.github/agents/code-reviewer.md` to add project-specific guidelines:
   ```markdown
   ## Project-Specific Guidelines
   
   - We use TypeScript with strict mode enabled
   - All public APIs must have JSDoc comments
   - Test coverage must be above 80%
   ```

4. **Commit the changes:**
   ```bash
   git add .github/agents/
   git commit -m "Add code reviewer agent"
   git push
   ```

## Usage

Once set up, the agent will be available when using GitHub Copilot in your repository. You can reference it when:
- Reviewing pull requests
- Getting feedback on code changes
- Asking for code improvement suggestions

## Example Prompts

Try asking GitHub Copilot:
- "Review this code for potential issues"
- "What best practices should I follow here?"
- "Can you suggest improvements for this function?"

## Customization Ideas

- Add language-specific guidelines
- Include your team's coding standards
- Reference your project's architecture patterns
- Add security requirements specific to your domain
