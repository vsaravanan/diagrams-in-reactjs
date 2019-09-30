import React from 'react'
import Chl from './Chl'
import ParentChildComp from './ParentChildComp'
import { useSelector } from 'react-redux'
import Line4 from './Line4'
import './anz.css'

export const CreateParent = (mydata, level) => {
  console.log('head %i %s ', level, mydata.name)

  const child = <Chl mydata={mydata} level={level} key={'Chl-' + mydata.name + '-' + level}></Chl>

  if (mydata.children || mydata.list) {
    var addsign = <Addsign myname={mydata.name}></Addsign>
  }

  const parent = (
    <div className='myrow' key={'div-chl-' + mydata.name + '-' + level}>
      {child}
      {addsign}
    </div>
  )

  return parent
}

export const CreateLine4Child = (mydata, level) => {
  console.log('line4 %i %s ', level, mydata.name)
  const child = (
    <Line4 list={mydata.list} level={level} key={'line4-' + mydata.name + '-' + level}></Line4>
  )
  return child
}

export const JoinParentChild = (mydataarray, propslevel) => {
  var level = propslevel + 1
  console.log('JoinParentChild %i %s ', level, mydataarray.name)

  var parent = CreateParent(mydataarray, level)

  var parentChilds = []
  if (mydataarray.children || mydataarray.list) {
    mydataarray.children &&
      mydataarray.children.forEach(innerarray => {
        if (innerarray.children || innerarray.list) {
          const totalblocks = JoinParentChild(innerarray, level)
          parentChilds.push(totalblocks)
        } else {
          const child = CreateParent(innerarray, level + 1)
          parentChilds.push(child)
        }
      })

    if (mydataarray.list) {
      const block = CreateLine4Child(mydataarray, level + 1)
      parentChilds.push(block)
    }

    const joined = (
      <ParentChildComp
        parent={parent}
        parentChilds={parentChilds}
        level={level}
        myname={mydataarray.name}
        mydata={mydataarray}
        key={'ParentChildComp-' + mydataarray.name + '-' + level}
      ></ParentChildComp>
    )
    return joined
  } else {
    return parent
  }
}

export const Addsign = props => {
  const showme = useSelector(state => state.childshow.item[props.myname])
  var isminus = showme === undefined ? true : showme
  const sign = isminus ? '-' : '+'
  const signbox = (
    <span className={'item-relative '} key={props.myname + '-sign'}>
      {sign}
    </span>
  )
  return signbox
}
