import React from 'react'

import { RenderModules } from 'src/utils/renderModules'
import { SEO } from 'src/components/SEO'

export interface PageProps {
  pageContext: {
    modules: []
    slug: string
    main: {
      title: string
    },
    meta: {}
  }
  path?: string
  preview?: boolean
}

const Page = ({
  path,
  pageContext,
  preview = false
}: PageProps) => {
  const {
    modules,
    slug,
    meta
  } = pageContext

  const url = slug === 'home' ? '' : path
  return (
    <div className='mt1 x ac'>
      {preview && (
        <div className='bcblue ac cw x p1'>This is a Preview</div>
      )}
      <SEO metaInfo={meta} pagePath={url} />
      <div className='container--1000 mt2 pt6--800 mxa x al'>
        {RenderModules(modules)}
      </div>
    </div>
  )
}

export default Page