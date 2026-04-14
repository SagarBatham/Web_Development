# Fix Profile Update 404 (/users/undefined)

## Steps:
- [x] Step 1: Edit ProfileUser.jsx - Update updateHandler to pass correct users.id and merge id into data payload.
- [ ] Step 2: Test the update functionality (login → profile → update form → check network/localStorage). Guards added to handle null users.
- [ ] Step 3: Update TODO.md with completion and attempt_completion.
