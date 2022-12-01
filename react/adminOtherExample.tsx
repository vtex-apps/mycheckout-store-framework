import type { FC } from 'react'
import React from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'

import tokenGQL from './admin/graphql/token.gql'

const AdminOtherExample: FC = () => {
  const { data: retrievedToken } = useQuery(tokenGQL)

  return (
    <Layout>
      <PageBlock
        title="Gerenciamento"
        subtitle="Tokens e Dados de Configuração"
        variation="full"
      >
        <p>Current token: {retrievedToken?.token}</p>
      </PageBlock>
    </Layout>
  )
}

export default AdminOtherExample
