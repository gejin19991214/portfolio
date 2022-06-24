const CustomCode = (props) => {
  return <code style={{ backgroundColor: 'red'}} {...props} />
}

const MDXComponents = {
  p: props => <p style={{fontSize: '10px'}} {...props} />,
  inlineCode: CustomCode,
  code: props => <pre style={{fontSize: '100px', color: 'tomato'}} {...props} />
}

export default MDXComponents