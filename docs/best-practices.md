# Best Practices for Agent Configurations

This guide outlines best practices for creating effective agent configurations.

## Core Principles

### 1. Single Responsibility
Each agent should have one clear, focused purpose.

**Good:**
```markdown
# Python Test Generator
Generates unit tests for Python functions using pytest.
```

**Avoid:**
```markdown
# Python Helper
Does testing, linting, formatting, and code review.
```

### 2. Clear Instructions
Provide specific, actionable instructions.

**Good:**
- "Check for SQL injection vulnerabilities in database queries"
- "Ensure all public functions have docstrings"
- "Use meaningful variable names, preferring descriptive over short"

**Avoid:**
- "Make the code better"
- "Fix issues"
- "Follow best practices"

### 3. Relevant Context
Include information that helps the agent understand your project.

**Include:**
- Technology stack and versions
- Architectural patterns used
- Team conventions
- Domain-specific knowledge

**Example:**
```markdown
## Project Context
- Using Django 4.2 with Django REST Framework
- Following Repository pattern for data access
- Healthcare domain with HIPAA compliance requirements
```

### 4. Actionable Guidelines
Provide specific rules and constraints.

**Good:**
- "Maximum function length: 50 lines"
- "Always use type hints for function parameters"
- "Database queries must use parameterized statements"

**Avoid:**
- "Keep functions short"
- "Use types"
- "Write safe code"

## Structure

### Recommended Template Structure

```markdown
# [Agent Name]

## Purpose
[One sentence description]

## Instructions
[Detailed role and responsibilities]

## Guidelines
[Specific rules and constraints]

## Context
[Project-specific information]

## Examples
[Usage examples]
```

### Naming Conventions

- Use lowercase with hyphens: `code-reviewer.md`
- Be descriptive: `python-security-scanner.md` not `scanner.md`
- Indicate scope: `react-component-generator.md`

## Writing Effective Instructions

### Use Active Voice
- ✅ "Review code for security vulnerabilities"
- ❌ "Code should be reviewed for security vulnerabilities"

### Be Specific
- ✅ "Use ES6 arrow functions for callbacks"
- ❌ "Use modern JavaScript"

### Provide Examples
```markdown
## Example
When generating error messages:
- ❌ "Error occurred"
- ✅ "Failed to connect to database: connection timeout after 30s"
```

## Testing Your Agents

1. **Start Small**: Test with simple scenarios first
2. **Iterate**: Refine based on results
3. **Get Feedback**: Have others try your agent
4. **Document Edge Cases**: Note limitations and special cases

## Common Pitfalls

### Too Broad
❌ "Help with coding"
✅ "Generate unit tests for JavaScript functions"

### Too Vague
❌ "Follow standards"
✅ "Follow Airbnb JavaScript Style Guide"

### Missing Context
❌ Just providing rules
✅ Explaining why rules exist and when to apply them

### Over-Constraining
❌ "Always do X, never do Y, must include Z"
✅ "Prefer X, avoid Y in most cases, include Z when relevant"

## Version Control

- Track changes to agent configurations
- Document significant updates
- Consider versioning for major changes
- Keep a changelog for complex agents

## Documentation

Always include:
- Purpose and scope
- Usage instructions
- Examples
- Related agents or resources
- Creation/modification dates

## Security Considerations

- Never include sensitive information (API keys, passwords)
- Be explicit about security requirements
- Consider data privacy implications
- Document compliance requirements if applicable

## Performance

- Keep instructions concise but complete
- Avoid redundant information
- Focus on high-impact guidelines
- Prioritize critical requirements

## Maintenance

- Review agents periodically
- Update for new technologies or practices
- Remove obsolete instructions
- Keep documentation current

## Sharing Agents

Before sharing:
- Remove project-specific secrets or sensitive data
- Generalize instructions where appropriate
- Add clear usage examples
- Document any dependencies or prerequisites
