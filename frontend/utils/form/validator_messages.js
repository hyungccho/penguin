export const isRequired = (name) => {
  return `Please enter a valid ${name}`;
}

export const emailFormat = (name) => {
  return 'Please enter a valid email address'
}

export const minLength = (length) => {
  return (name) => {
    return (
      `${name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()}` +
      ` must be at least ${length} characters long`
    )
  }
}