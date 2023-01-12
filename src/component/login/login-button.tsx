import styled from 'styled-components'

function LoginButton({
  buttonName,
  onClick,
}: {
  buttonName: string
  onClick: () => void
}) {
  return (
    <StyledButton type={'button'} onClick={onClick}>
      {buttonName}
    </StyledButton>
  )
}

export function FirebaseLoginButton() {
  const onClick = () => {
    alert('hi')
  }

  return <LoginButton buttonName={'Login via Firebase'} onClick={onClick} />
}

const StyledButton = styled.button`
  padding: 0.5rem 2.5rem;
  filter: drop-shadow(1px 1px 1px #141414);
`
