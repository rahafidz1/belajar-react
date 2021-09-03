import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      name: "",
      sekolah: '',
      hobi: '',
      hasil: '',
    };
  }

  changeHandler = (e) => {
    this.setState({
      // [e.target.name]: e.target.value,
      // firstname: e.target.value
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      name: `${this.state.firstname} ${this.state.lastname}`,
      hasil: `${this.state.firstname} ${this.state.lastname} ${this.state.hobi}${this.state.sekolah}`
    });
    // this.state.firstname = "";
    // this.state.lastname = "";
    // this.state.sekolah = '';
    // this.state.hobi = '';
  };
  render() {
    const { name, sekolah, hobi, hasil } = this.state;
    return (
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Learn React JS</div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstname" className="form-label">
                      firstname
                      </label>
                      <input
                        type="text"
                        value={this.state.firstname}
                        onChange={this.changeHandler}
                        name="firstname"
                        id="firstname"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="lastname" className="form-label">
                        lastname
                      </label>
                      <input
                        type="text"
                        value={this.state.lastname}
                        onChange={this.changeHandler}
                        name="lastname"
                        id="lastname"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="sekolah" className="form-label">
                        sekolah
                      </label>
                      <input
                        type="text"
                        value={this.state.sekolah}
                        onChange={this.changeHandler}
                        name="sekolah"
                        id="sekolah"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="hobi" className="form-label">
                        hobi
                      </label>
                      <input
                        type="text"
                        value={this.state.hobi}
                        onChange={this.changeHandler}
                        name="hobi"
                        id="hobi"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      show
                    </button>
                  </form>
                </div>
                <div className="card-footer">
                  my name is {name ? name : "..."}
                </div>
                <div className="card-footer">
                  sekolah saya  di {sekolah ? sekolah : "..."}
                </div>
                <div className="card-footer">
                  hobi saya {hobi ? hobi : "..."}<br />
                  hasil saya {hasil ? hasil : "..."}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
