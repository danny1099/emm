import styled from '@emotion/styled'

const Image = styled.svg`
  height: ${(props) => props.size || '1em'};
  width: ${(props) => props.size || '1em'};
  pointer-events: none;

  & .color {
    color: ${(props) => props.color || 'var(--primary)'};
  }
`

export default function Icon(props) {
  return (
    <div className="icon-content">
      <Image {...props} className={'bi color'}>
        <use xlinkHref={`/images/icons_collection.svg#${props.icon}`} />
      </Image>
    </div>
  )
}
