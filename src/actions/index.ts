'use server'

import { GraphQLClientSingleton } from "@/graphql"
import { createUserMutation } from "@/graphql/mutations/createUserMutation"

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  delete formDataObject['password_confirmation']
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    input: {
      ...formDataObject,
      phone: '+57' + formDataObject.phone
    }
  }
  const { customerCreate } = await graphqlClient.request(createUserMutation, variables)
  const { customerUserErrors, customer } = customerCreate
}