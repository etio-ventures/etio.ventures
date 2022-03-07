/**
 * Constructs command echo based on user's styling options
 * @param promptLabel - Prompt label element
 * @param rawInput - Raw command input
 */
const constructEcho = (promptLabel, rawInput) => {
  return (
    <div>
      <span>{promptLabel} </span>
      <span>{rawInput}</span>
    </div>
  )
}

export default constructEcho;