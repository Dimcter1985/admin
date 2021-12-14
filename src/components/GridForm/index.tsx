import React, { Children } from 'react'
import Grid from 'components/FormGrid'
import { SimpleFormProps } from 'react-admin'
import SimpleForm from 'components/SimpleForm'

const GridFormView = ({ children }: { children: SimpleFormProps['children']}) => {
  if (!children) { return null }

  return (
    <Grid.Container>
      {Children.map(
        children as unknown as JSX.Element,
        (input: React.ReactElement) => input && (
          <Grid.Item>
            { input }
          </Grid.Item>
        ),
      )}
    </Grid.Container>
  )
}

const GridForm = ({ children, ...props }: SimpleFormProps) => (
  <SimpleForm {...props}>
    <GridFormView>
      { children }
    </GridFormView>
  </SimpleForm>
)

export default GridForm
