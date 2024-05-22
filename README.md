# `useFormState` and `useFormStatus` demo

This is a simple demo of how to use `useFormState` and `useFormStatus` hooks.

Actions using `useFormState` must have a `previousState` as the first argument. This argument will be omitted in the action returned by the hook.

`useFormStatus` must be used inside a form. Meaning that the submit button should be its own component.
