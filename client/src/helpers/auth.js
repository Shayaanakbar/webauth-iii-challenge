import React from 'react'
import { withRouter } from 'react-router-dom'

function withAuth(Component) {
  const Auth = (props) => {
    const hasToken = Boolean(localStorage.getItem('token'))

    if (hasToken) {
      return <Component {...props} />
    } else {
      props.history.push('/login')
      return <div>You are not authorized</div>
    }
  }

  return withRouter(Auth)
}

export default withAuth