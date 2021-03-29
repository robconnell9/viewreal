import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

export default class extends Component {
  static async getInitialProps() {
    const res = await fetch("http://localhost:3001/getproperties");
    const data = await res.json();
    return {
      values: data,
    }
  }

  renderTableData() {
    const abs = {
      position: "absolute"
    }
    return this.props.values.map((entry, index) => {
      const address = entry.address;
       return (
          <tr key={address.streetAddress}>
             <td>
             <div>{address.streetAddress}</div>
             <div> <a href={entry.url}><img src={entry.image}  width="300" height="300" /></a></div>
             </td>
          </tr>
       )
    })
 }


  render() {
    return (
       <div>
          <h1 id='title'>React Dynamic Table</h1>
          <table id='students'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}