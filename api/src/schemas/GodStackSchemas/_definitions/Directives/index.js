import HideTheFieldDirective from './HideTheFieldDirective'

export const schemaDirectives = {
  hideTheField: HideTheFieldDirective,
}

export const directives = `
  directive @hideTheField on FIELD_DEFINITION | INPUT_FIELD_DEFINITION | ARGUMENT_DEFINITION
`
