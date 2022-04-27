import TextField from '@mui/material/TextField'
import styled from '@emotion/styled'

const Textfield = styled(TextField)`
  & .MuiInputBase-root {
    font-family: 'Poppins', 'Roboto', sans-serif;
    font-size: 0.8rem;
  }

  .MuiInputLabel-root {
    color: gray;
    font-size: 0.8rem;
  }

  && .MuiInputLabel-shrink {
    color: gray;
    font-size: 0.9rem;
  }

  .MuiInput-underline:before {
    border-bottom: 1px solid lightgray;
  }

  && .MuiInput-underline:hover::before {
    border-bottom: 1px solid lightgray;
  }

  .MuiInput-underline:after {
    border-bottom: 1px solid var(--primary);
  }
`
export default function InputText(props) {
  return (
    <div className="input-text">
      <Textfield {...props} />
    </div>
  )
}
