# Agent Development Guide

This guide provides detailed information on creating custom agent configurations.

## Understanding Agents

Agents are instruction sets that guide AI coding assistants. They work by:
1. Providing context about the project or task
2. Defining specific behaviors and constraints
3. Offering examples and guidelines
4. Setting expectations for output

## Agent Anatomy

### Essential Components

#### 1. Purpose Statement
```markdown
## Purpose
Generate comprehensive unit tests for Python functions using pytest framework.
```

A clear, concise statement of what the agent does.

#### 2. Role Definition
```markdown
## Instructions
You are an experienced Python test engineer specializing in pytest.
```

Defines the persona or expertise level of the agent.

#### 3. Responsibilities
```markdown
Your role is to:
1. Analyze function signatures and behavior
2. Generate test cases covering normal and edge cases
3. Use pytest fixtures and parametrize decorators appropriately
```

Lists specific tasks the agent should perform.

#### 4. Guidelines
```markdown
## Guidelines
- Aim for 100% code coverage
- Include docstrings for test functions
- Test both success and failure scenarios
- Use descriptive test names following the pattern: test_<function>_<scenario>_<expected_result>
```

Specific rules and constraints to follow.

### Optional Components

#### Context
```markdown
## Context
The project uses:
- Python 3.9+
- pytest with pytest-cov
- Type hints throughout the codebase
```

Project-specific information that helps the agent make better decisions.

#### Examples
```markdown
## Examples

For a function like:
\`\`\`python
def divide(a: float, b: float) -> float:
    return a / b
\`\`\`

Generate tests like:
\`\`\`python
def test_divide_positive_numbers_returns_quotient():
    assert divide(10, 2) == 5.0

def test_divide_by_zero_raises_exception():
    with pytest.raises(ZeroDivisionError):
        divide(10, 0)
\`\`\`
```

Concrete examples of expected behavior.

## Development Process

### Step 1: Define the Problem

Ask yourself:
- What specific task needs automation or guidance?
- What context is needed?
- What are the constraints?

### Step 2: Identify the Audience

Consider:
- Who will use this agent?
- What's their skill level?
- What's their goal?

### Step 3: Draft Instructions

Write clear, specific instructions:
- Use active voice
- Be prescriptive, not descriptive
- Provide rationale when helpful

### Step 4: Add Context

Include relevant information:
- Technology stack
- Architectural patterns
- Team conventions
- Domain knowledge

### Step 5: Test and Refine

1. Test with simple cases
2. Try edge cases
3. Gather feedback
4. Iterate on instructions

### Step 6: Document

Ensure your agent has:
- Clear purpose
- Usage examples
- Related resources
- Maintenance information

## Advanced Techniques

### Conditional Instructions

```markdown
## Guidelines

When working with user input:
- Always validate and sanitize
- Use parameterized queries for databases
- Escape output for HTML contexts

When generating API responses:
- Include appropriate status codes
- Provide meaningful error messages
- Follow REST conventions
```

### Prioritized Guidelines

```markdown
## Priority Order

1. **Security**: No SQL injection, XSS, or other vulnerabilities
2. **Correctness**: Code must work as specified
3. **Performance**: Optimize for common cases
4. **Readability**: Use clear names and structure
```

### Domain Knowledge

```markdown
## Domain Context

In healthcare applications:
- PHI (Protected Health Information) must be encrypted at rest and in transit
- Audit logs required for all data access
- HIPAA compliance is mandatory
- Data retention policies must be followed
```

### Progressive Disclosure

Start with essentials, add details as needed:

```markdown
## Basic Guidelines
- Write clear, readable code
- Include error handling
- Add tests for new features

## Detailed Guidelines
[Click to expand for specific rules about naming, structure, etc.]
```

## Common Patterns

### Language-Specific Agents

```markdown
# Python Code Generator

## Instructions
Generate Python code following these conventions:
- Use PEP 8 style guide
- Include type hints for all functions
- Use docstrings in Google format
- Prefer list comprehensions for simple transformations
```

### Task-Specific Agents

```markdown
# Bug Fixer Agent

## Instructions
When fixing bugs:
1. Identify the root cause, not just symptoms
2. Write a failing test that reproduces the bug
3. Fix the bug with minimal changes
4. Verify all tests pass
5. Add comments explaining the fix
```

### Role-Based Agents

```markdown
# Security Auditor

## Instructions
You are a security expert reviewing code for vulnerabilities.
Focus on:
- Input validation and sanitization
- Authentication and authorization
- Encryption of sensitive data
- Secure dependencies
```

## Testing Your Agent

### Test Scenarios

1. **Happy Path**: Does it work for normal cases?
2. **Edge Cases**: How does it handle unusual inputs?
3. **Ambiguity**: What happens with unclear instructions?
4. **Conflicts**: How does it resolve competing requirements?

### Evaluation Criteria

- **Accuracy**: Does it produce correct results?
- **Consistency**: Are results consistent across similar inputs?
- **Completeness**: Does it address all aspects of the task?
- **Clarity**: Are outputs clear and well-explained?

## Maintenance

### When to Update

- New technologies or practices emerge
- Team conventions change
- Feedback reveals issues
- Requirements evolve

### Version Control

Consider versioning for significant changes:

```markdown
# Agent Name

**Version**: 2.0
**Last Updated**: 2025-12-29
**Changelog**:
- v2.0: Added TypeScript support
- v1.5: Enhanced error handling guidelines
- v1.0: Initial release
```

## Tips for Success

1. **Start Simple**: Begin with basic instructions, add complexity as needed
2. **Be Specific**: Vague instructions lead to unpredictable results
3. **Provide Examples**: Show, don't just tell
4. **Test Thoroughly**: Try various scenarios before sharing
5. **Iterate**: Refine based on real usage
6. **Document**: Clear documentation helps others use and modify your agent

## Resources

- [Getting Started Guide](getting-started.md)
- [Best Practices](best-practices.md)
- [Agent Template](../templates/agent-template.md)
- [Examples](../examples/)

## Community

Share your agents and learn from others:
- Submit pull requests with new agents
- Report issues with existing agents
- Suggest improvements
- Help others with questions
