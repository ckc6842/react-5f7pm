import React from 'react'

const Heading = () => {
  return <h1> YJ Book Store</h1>
}

class App extends React.Component {
  componentWillReceiveProps(nextprops) {
      this.isModal=(nextprops.location.state && nextprops.location.state.modal)
      if (this.isModal &&
          nextprops.location.key !== this.props.location.key) {
          this.previousChilren = this.props.children
      }
  }
  render() {
      return (
          <div className="well">
              <Heading/>
              <div>
                  {(this.isModal)?this.previousChilren:
                  this.props.children}

                  {/* {(this.isModal)?
                      <Modal isOpen={true} nextprops=
                          {this.props.location.state.returnTo}>
                              {this.props.children}
                          </Modal>:''
                  } */}
              </div>
          </div>
      )
  }
}

export default App
