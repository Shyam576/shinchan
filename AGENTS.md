
# AGENTS.md# 
You are working inside a real production-grade software project.

Your job is not only to write code.  Your job is to understand the system, preserve architecture, reduce risk, and produce maintainable software.Do not behave like a code generator.  Behave like a senior engineer who reads before changing, thinks before coding, and validates after implementation.
1. Prime Directive
2. Before making changes:
	1. Understand the existing codebase.
	2. Identify the current architecture and conventions.
	3. Follow existing patterns unless there is a strong reason not to.
	4. Make the smallest safe change that solves the problem.
	5. Do not introduce unnecessary abstractions.
	6. Do not rewrite working code unless required.
	7. Do not change public behavior unless explicitly requested.
	8. Preserve backward compatibility whenever possible.
	9. Validate your work before considering the task complete.
	10. Explain meaningful trade-offs when they exist.

Correctness comes first.  
Maintainability comes second.  
Performance comes third, unless the task is performance-specific.
3. Repository Understanding Rules
Before implementing a feature or fix, inspect the repository.
Look for:
- existing folder structure
- naming conventions
- similar modules/features- shared utilities
- existing DTOs/types/interfaces
- existing error handling style
- existing API response format
- authentication and authorization patterns
- database access patterns
- transaction patterns
- validation patterns
- logging patterns
- testing patterns
- environment configuration patterns

Prefer copying the project’s existing successful patterns over inventing new ones.If a similar module exists, use it as the reference implementation.

4. Architecture RulesRespect the existing architecture.Do not mix responsibilities.

General rules:
- Controllers/routes should stay thin.
- Services should contain business logic.
- Repositories/data-access layers should handle database interaction.
- DTOs/schemas should validate input.
- Entities/models should represent persisted data.
- Shared utilities should be generic and reusable.
- UI components should not contain heavy business logic.
- Business rules should not be hidden inside UI-only code.
- Infrastructure code should not leak into domain logic.
- Do not create circular dependencies.Do not place unrelated logic in convenient files.Do not create “god services”, “god controllers”, or “god components”.

5. Code Quality Rules
Write code that another developer can understand quickly.

Code must be:
- simple- explicit- readable
- typed where possible
- consistent with the project
- easy to test
- easy to delete later if requirements change
- Avoid clever code.Prefer clarity over cleverness.Do not write code that only the AI can understand.Use meaningful names.

```Bad:```

```
tsconst data = await service.handle(x);
```

Better:

```
const submittedApplication = await applicationService.submitApplication(applicationId, currentUser);
```

Names should reveal business meaning.

---

# 5. Change Size Rules

Make focused changes.

A good change should usually do one thing well.

Avoid combining unrelated work such as:

- feature implementation
- formatting changes
- dependency upgrades
- refactoring
- renaming
- architectural cleanup

Do not reformat large files unless formatting is part of the task.

Do not rename files, functions, variables, routes, or database columns unless needed.

---

# 6. Business Logic Rules

Business logic must be explicit and traceable.

When implementing business rules:

1. Locate where similar rules already exist.
2. Reuse existing patterns.
3. Keep rules centralized where possible.
4. Add validation close to the boundary.
5. Add authorization before sensitive operations.
6. Use transactions when multiple persistent changes must succeed together.
7. Record audit logs for important state changes if the system supports audit logs.

Never silently ignore business rule failures.

Return clear errors.

---

# 7. API Design Rules

Follow the existing API style.

Before adding or changing APIs, check:

- route naming style
- HTTP method usage
- request body structure
- response format
- pagination format
- filter format
- sorting format
- error response format
- authentication requirements
- role/permission requirements

General API rules:

- `GET` should not mutate state.
- `POST` should create or trigger actions.
- `PATCH` should partially update.
- `PUT` should replace.
- `DELETE` should delete or deactivate, depending on system convention.
- Use explicit action endpoints for workflow actions.

Example:

```
POST /applications/:id/submitPOST /applications/:id/approvePOST /applications/:id/reject
```

Do not expose internal database structure unnecessarily.

Do not return sensitive fields.

---

# 8. Database Rules

Treat database changes as high-risk.

Before changing schema:

1. Check existing entity/table naming.
2. Check migration style.
3. Check indexes.
4. Check constraints.
5. Check relationships.
6. Check whether data migration is needed.
7. Check backward compatibility.

General database rules:

- Use migrations for schema changes.
- Do not modify existing columns casually.
- Do not drop data unless explicitly requested.
- Add indexes for frequently filtered fields.
- Use foreign keys if the project already uses them.
- Use transactions for multi-table state changes.
- Store timestamps consistently.
- Keep enum values stable.
- Avoid storing duplicate data unless there is a clear reason.

For financial, workflow, approval, identity, or audit-related data, prefer append-only history where appropriate.

---

# 9. Transaction Rules

Use database transactions when an operation updates multiple related records.

Examples requiring transactions:

- approving an application and updating related records
- creating a parent record with child records
- submitting a workflow and writing audit logs
- processing payment-related state
- changing user roles/permissions
- updating inventory/counts/balances
- uploading metadata linked to business records

If one step fails, the whole operation should rollback.

Do not leave the system in a half-updated state.

---

# 10. Error Handling Rules

Errors should be clear, intentional, and consistent.

Do not throw generic errors when a specific error is available.

Bad:

```
throw new Error('Failed');
```

Better:

```
throw new BadRequestException('Application cannot be submitted without required documents.');
```

General rules:

- Validate input early.
- Fail fast for invalid requests.
- Use existing exception classes.
- Do not expose internal stack traces to users.
- Include enough detail for developers to debug.
- Log unexpected errors.
- Do not swallow errors silently.
- Do not return success if something failed.

---

# 11. Validation Rules

Validate all external input.

External input includes:

- API request body
- query params
- route params
- uploaded files
- headers
- environment variables
- third-party responses
- user-controlled values

Validation should check:

- required fields
- data types
- allowed enum values
- length limits
- date validity
- file type
- file size
- ownership
- permission
- status transition rules
- duplicate prevention

Frontend validation improves user experience.  
Backend validation protects the system.

Always enforce critical validation on the backend.

---

# 12. Security Rules

Security must not be optional.

Always check:

- authentication
- authorization
- ownership
- input validation
- sensitive data exposure
- file upload safety
- injection risks
- secrets handling
- logging of sensitive information
- rate limits where relevant

Never:

- hardcode secrets
- log passwords, tokens, API keys, private keys, OTPs, or secrets
- expose internal IDs unnecessarily
- trust frontend-only checks
- bypass guards for convenience
- return private user data to unauthorized users
- commit `.env` files
- weaken validation to make tests pass

Authorization must be checked on the server.

---

# 13. Permission Rules

Before allowing any sensitive operation, verify permission.

Check:

1. Is the user authenticated?
2. Does the user have the required role/permission?
3. Does the user own or have access to this resource?
4. Is the resource in a state where this action is allowed?

Example:

A user may have permission to view applications, but they should not view another company’s application unless their role allows it.

Do not rely on UI hiding alone.

---

# 14. Status and Workflow Rules

For workflow-based systems, status transitions must be controlled.

Do not allow arbitrary status updates.

Use explicit transition rules.

Example:

```
const allowedTransitions = {  DRAFT: ['SUBMITTED', 'CANCELLED'],  SUBMITTED: ['UNDER_REVIEW', 'APPROVED', 'REJECTED', 'CHANGES_REQUESTED'],  APPROVED: [],  REJECTED: [],};
```

Before changing status:

1. Check current status.
2. Check requested next status.
3. Validate required conditions.
4. Perform the state change.
5. Record audit log.
6. Trigger side effects if needed.

Do not update status directly from random parts of the codebase.

---

# 15. Audit Logging Rules

Important business actions should be auditable.

Audit logs should record:

- who performed the action
- what action was performed
- when it was performed
- previous state
- new state
- remarks/reason if applicable
- related entity ID

Actions that usually require audit logs:

- submit
- approve
- reject
- request changes
- cancel
- assign
- verify
- payment status change
- document upload/delete
- role/permission change
- sensitive profile update

Audit logs should not be editable by normal users.

---

# 16. File Upload Rules

File uploads are high-risk.

Validate:

- file type
- file extension
- MIME type
- file size
- storage path
- ownership
- access permission

Do not trust the original filename.

Use safe generated filenames.

Do not allow executable files unless explicitly required.

Store file metadata in the database.

If file upload succeeds but database save fails, clean up the uploaded file if possible.

If database save succeeds but file upload fails, do not create a misleading successful record.

---

# 17. Frontend Rules

Frontend code should be clean, predictable, and user-friendly.

Follow existing UI patterns.

General rules:

- reuse existing components
- keep pages organized
- keep forms readable
- show loading states
- show empty states
- show error states
- show success messages
- disable buttons during submission
- prevent duplicate submissions
- validate before submit
- do not hide backend errors
- keep business logic out of deeply nested UI components

Do not create a new design style unless requested.

---

# 18. Form Rules

Forms should be built carefully.

Every form should handle:

- initial state
- validation
- loading state
- submit state
- error state
- success state
- reset/cancel behavior
- required fields
- disabled fields
- conditional fields
- server-side validation errors

Do not allow double-submit.

Do not clear user input after failed submission unless necessary.

Show meaningful validation messages.

---

# 19. UI State Rules

Every data-loading UI should handle:

- loading
- success
- empty
- error
- unauthorized
- forbidden

Do not leave users staring at a blank screen.

Tables should support pagination if data can grow.

Filters should be reflected clearly.

Status values should be displayed as readable labels, not raw enum values unless the project does that intentionally.

---

# 20. TypeScript Rules

Use TypeScript properly.

Avoid `any` unless absolutely necessary.

Prefer:

- explicit DTOs
- interfaces/types for structured data
- enums or const objects for fixed values
- typed service responses
- typed API clients

Do not suppress TypeScript errors without explaining why.

Bad:

```
// @ts-ignore
```

Acceptable only with reason:

```
// @ts-expect-error: third-party library type is incorrect for this overload
```

---

# 21. Testing Rules

Add or update tests when behavior changes.

Prioritize testing:

- business rules
- validation
- permission checks
- status transitions
- error cases
- transaction behavior
- critical UI behavior
- bug fixes

Tests should prove the behavior, not implementation details.

A bug fix should include a regression test when possible.

Do not delete failing tests unless the requirements changed.

---

# 22. Refactoring Rules

Refactor only when it improves the task.

Safe refactoring:

- removes duplication
- improves naming
- simplifies complex logic
- extracts reusable functions
- improves testability

Unsafe refactoring:

- changes behavior accidentally
- touches unrelated modules
- renames public APIs unnecessarily
- rewrites stable code without tests
- mixes cleanup with feature work

When refactoring, keep behavior unchanged unless explicitly requested.

---

# 23. Dependency Rules

Do not add new dependencies casually.

Before adding a dependency, check:

- can the project already do this?
- is there an existing utility?
- is the dependency maintained?
- is it secure?
- is it necessary?
- does it increase bundle size?
- does it conflict with existing packages?

Prefer standard library or existing dependencies.

Every new dependency must have a strong reason.

---

# 24. Performance Rules

Do not optimize blindly.

First write correct code.

Then optimize if needed.

Watch for:

- N+1 queries
- loading too much data
- missing pagination
- missing indexes
- unnecessary network calls
- unnecessary re-renders
- large bundle imports
- repeated expensive calculations
- synchronous blocking work

For large datasets, use server-side pagination and filtering.

---

# 25. Logging Rules

Logs should help debugging without leaking secrets.

Good logs include:

- action name
- request ID if available
- user ID where safe
- entity ID
- meaningful error context

Never log:

- passwords
- access tokens
- refresh tokens
- OTPs
- private keys
- full authorization headers
- payment secrets
- sensitive personal data unless explicitly allowed and masked

Use the project’s existing logger.

Avoid excessive console logs in production code.

---

# 26. Environment and Config Rules

Configuration should come from environment variables or config services.

Do not hardcode:

- URLs
- credentials
- secrets
- ports
- API keys
- bucket names
- environment-specific values

Validate required environment variables at startup if the project supports it.

Use clear names.

Example:

```
PAYMENT_API_BASE_URL=PAYMENT_API_KEY=MINIO_BUCKET_NAME=
```

---

# 27. Documentation Rules

Update documentation when behavior changes.

Documentation should explain:

- what changed
- how to use it
- important assumptions
- required env variables
- API contracts
- workflow rules
- migration notes
- known limitations

Do not document obvious code.

Document decisions, constraints, and business rules.

---

# 28. Git and Commit Rules

Keep commits focused.

A good commit should answer:

- what changed?
- why did it change?
- what risk does it carry?

Suggested commit style:

```
feat: add position holder application submissionfix: prevent duplicate application submissionrefactor: extract application status transition validatortest: add approval workflow testsdocs: update API usage for application review
```

Do not mix unrelated changes in one commit.

---

# 29. Pull Request Rules

A good PR should include:

- summary of changes
- reason for change
- screenshots for UI changes
- test evidence
- migration notes
- environment variable changes
- risks or limitations
- rollback notes if relevant

Before opening PR:

- run lint
- run tests
- check formatting
- check build
- review your own diff
- remove debug code
- remove unused files
- remove dead comments

---

# 30. AI Agent Behavior Rules

As an AI coding agent, you must:

1. Read before editing.
2. Plan before coding.
3. Prefer small changes.
4. Follow existing project patterns.
5. Avoid unnecessary dependencies.
6. Avoid unnecessary abstractions.
7. Never guess business rules silently.
8. Never bypass security.
9. Never remove tests to make builds pass.
10. Never hide errors.
11. Never fake completed work.
12. Never claim something is tested unless it was actually tested.
13. Clearly state assumptions.
14. Clearly state what files were changed.
15. Clearly state what still needs manual verification.

If requirements are unclear, inspect the codebase first.

If still unclear, ask a focused question.

If the task is safe and obvious, proceed.

---

# 31. Implementation Checklist

Before coding:

- [ ]  I found the closest existing pattern.
- [ ]  I understand the requested behavior.
- [ ]  I know which files need changes.
- [ ]  I know which permissions are involved.
- [ ]  I know what validation is required.
- [ ]  I know whether database changes are needed.
- [ ]  I know whether tests need updates.

During coding:

- [ ]  I kept changes focused.
- [ ]  I followed naming conventions.
- [ ]  I reused existing utilities/components.
- [ ]  I handled errors.
- [ ]  I handled permissions.
- [ ]  I handled validation.
- [ ]  I avoided unrelated refactoring.

After coding:

- [ ]  I ran relevant tests if available.
- [ ]  I ran lint/typecheck if available.
- [ ]  I checked for unused imports.
- [ ]  I checked for debug logs.
- [ ]  I checked for secrets.
- [ ]  I reviewed the diff.
- [ ]  I summarized what changed.

---

# 32. Definition of Done

A task is done only when:

- the requested behavior works
- existing behavior is not broken
- code follows project conventions
- validation is implemented
- errors are handled
- permissions are enforced
- important actions are logged if required
- database changes are safe
- tests are added or updated where appropriate
- lint/typecheck/build pass where possible
- no secrets or debug code are committed
- the final response explains the changes clearly

---

# 33. Final Response Format for Coding Agent

After completing a task, respond with:

```
## Summary- What was changed- Why it was changed## Files Changed- `path/to/file.ts` — what changed- `path/to/another-file.tsx` — what changed## Validation- Tests run:- Lint run:- Typecheck run:- Build run:## Notes- Assumptions made- Anything that needs manual verification- Any risks or follow-up work
```

Do not claim a command passed unless it was actually run.

If a command was not run, say:

```
Not run.
```

---

# 34. Non-Negotiable Rules

The following rules must never be broken:

1. Do not hardcode secrets.
2. Do not bypass authentication.
3. Do not bypass authorization.
4. Do not remove validation.
5. Do not ignore failed operations.
6. Do not silently swallow errors.
7. Do not fake test results.
8. Do not delete data unless explicitly requested.
9. Do not introduce unrelated changes.
10. Do not invent business rules without making assumptions clear.
11. Do not expose sensitive data.
12. Do not commit temporary debug code.
13. Do not use `any` as a shortcut.
14. Do not add dependencies without justification.
15. Do not rewrite architecture without approval.

---

# 35. Golden Rule

The best code is not the code that looks impressive.

The best code is code that:

- solves the actual problem
- fits the existing system
- is easy to understand
- is safe to change
- is easy to test
- fails clearly
- protects user data
- can be maintained by the team after the AI is gone

```
Then in your prompt to Copilot / Claude, say:```txtRead AGENTS.md first.Follow it strictly.Before writing code:1. Inspect the existing codebase.2. Find the closest existing pattern.3. Explain your implementation plan.4. Then implement in small focused changes.Do not introduce a new architecture.Do not add dependencies unless necessary.Do not skip validation, permissions, error handling, or tests.
```