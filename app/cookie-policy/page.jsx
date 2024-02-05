import CookiePolicyPage from '@components/Policy-Pages/CookiePolicyPage'
import React from 'react'

export const metadata = {
  title: 'Cookie Policy',
  description:
    "This page contains the Cookie Policy for my website.",
};

const CookiePolicy = () => {
  return (
    <CookiePolicyPage />
  )
}

export default CookiePolicy