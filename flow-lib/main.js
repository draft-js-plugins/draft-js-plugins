// @flow
/* eslint-disable no-unused-vars */
import React from 'react'

type DeepAcceptedStatus = true | false | 'mixed'

type DiffType = 'root' | 'diff' | 'diff-move' | 'delete' | 'insert'

type Block = {
  key: number,
  type: DiffType,
  deepAccepted?: DeepAcceptedStatus,
  accepted?: boolean,
  depth?: number
}

type ContentType = 'text' | 'image'

type Value = {
  type: 'insert' | 'delete',
  accepted: boolean,
  value: string
}

type Content = {
  contentType: ContentType,
  value: string | Array<string | Value>
}

type IsAccepted = boolean

type StateChange = {
  key: number,
  recursive: boolean,
  accepted: boolean
}

type UpdateDiff = (change: StateChange) => void

type DiffPlugin = {
  accept: ({
    block: Block,
    content: Content
  }) => IsAccepted,
  render: ({
    block: Block,
    content: Content,
    node: React.Element,
    updateDiff: UpdateDiff
  }) => React.Element
}
