import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Checkbox, Span, Label } from 'components/atoms'
import { useMyContext } from 'hooks'

const Wrapper = styled(Span)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const LabelCaptionWrapper = styled(Label)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: ${({ theme }) => theme.sizes.spacing[2]};
`

const Caption = styled(Span)`
  letter-spacing: 0.03em;
`

const CheckboxLabel = ({
  id, label, caption, className, size, reference, onClick,
}) => {
  const { themeType } = useMyContext()
  return (
    <Wrapper className={className}>
      <Checkbox type="checkbox" size={size} id={id} reference={reference} onClick={onClick} />
      <LabelCaptionWrapper id={id}>
        <Span textsize="md" color={themeType === 'dark' ? 'white' : 'black'} bold>{label}</Span>
        <Caption textsize="sm" color="gray">{caption}</Caption>
      </LabelCaptionWrapper>
    </Wrapper>
  )
}

CheckboxLabel.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  caption: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  onClick: PropTypes.func,
}

export default CheckboxLabel
