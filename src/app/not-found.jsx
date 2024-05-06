import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>This Page Does Not Exist</p>
        <Link href="/">Return Back to Home</Link>
    </div>
  )
}

export default NotFound