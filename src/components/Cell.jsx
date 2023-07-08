import React from 'react'

export default function Cell() {
  return (
    <div>
        <input type="text" name="year" maxlength="1"  min="0" max="9" step="1" placeholder="X" pattern="[0-9]{1}"/>
    </div>
  )
}
