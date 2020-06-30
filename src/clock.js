import React, { Component } from 'react';

class Account extends Component {
  constructor() {
    super()
    this.state= {
      Minutes: 5,
      Seconds: 00,
      alert: false
    }
  }
  logChange = (e) => {
    let Userinput = parseInt(e.target.value)
    if (Userinput.includes() === NaN) {
      this.setState({
        alert: 'Not a valid number'
      })
    } else {
      this.setState({
        input: Userinput
      })
    }
  }
    handleDeposit = () => {
      const newDeposit = this.state.balance + this.state.input
      this.setState({
        balance: newDeposit
      })
    }
    handleWithdrawl = () => {
      const newWithdrawl = this.state.balance - this.state.input
      if (newWithdrawl >= 0) {
        this.setState({
          balance: newWithdrawl
        })
      } else {
        this.setState({
          alert: 'Insufficent Funds'
        })
      }
    }
    render() {
      return (
        <div className="account">
          <h2>{this.props.name}</h2>
          <div className={this.state.balance ? 'balance' : 'balance zero'}>{this.state.balance}</div>
          <input name="text" type="number" placeholder="enter an amount" onChange={this.logChange} />
          <input type="button" value="Deposit" onClick={this.handleDeposit} />
          <input type="button" value="Withdraw" onClick={this.handleWithdrawl} />
          <p>{this.state.alert}</p>
        </div>
      )
    }
  }
export default Account;

